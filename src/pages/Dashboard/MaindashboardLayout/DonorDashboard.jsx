import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { Edit, Trash2, Eye, CheckCircle, XCircle } from "lucide-react";

import useAxiosSecure from "../../../hooks/useAxiosSecqure"; // Adjust path to your Axios Secure hook
import { AuthContext } from "../../../Provider/AuthProvider";

const DonorDashboardHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  // Fetching 3 recent requests
  const {
    data: recentRequests = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["recent-requests", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-recent-requests`);
      // We take only the first 3 from the backend response
      return res.data.slice(0, 3);
    },
  });

  // Handle Status Change (Done / Cancel)
  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const res = await axiosSecure.patch(
        `/requests/status/${id}?status=${newStatus}`
      );
      if (res.data.modifiedCount > 0) {
        Swal.fire("Updated!", `Request is now ${newStatus}.`, "success");
        refetch();
      }
    } catch (error) {
      Swal.fire("Error", "Failed to update status", "error");
    }
  };

  // Handle Delete with Confirmation Modal
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/requests/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your request has been deleted.", "success");
          refetch();
        }
      }
    });
  };

  if (isLoading)
    return <div className="p-10 text-center">Loading Dashboard...</div>;

  return (
    <div className="p-6 lg:p-12 bg-white min-h-screen">
      {/* 1. Welcome Message */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome, <span className="text-red-600">{user?.displayName}</span>!
        </h1>
        <p className="text-gray-500 mt-2">
          Manage your recent blood donation requests below.
        </p>
      </div>

      {/* 2. Recent Donation Requests Table */}
      {recentRequests.length > 0 ? (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Recent Donation Requests
          </h2>
          <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-100">
            <table className="table w-full bg-white">
              <thead className="bg-gray-50">
                <tr className="text-gray-700 uppercase text-sm">
                  <th className="py-4">Recipient</th>
                  <th>Location</th>
                  <th>Date & Time</th>
                  <th>Status</th>
                  <th>Donor Info</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentRequests.map((req) => (
                  <tr
                    key={req._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="font-medium text-gray-900">
                      {req.recipient_name}
                    </td>
                    <td className="text-gray-600">
                      {req.recipient_district}, {req.recipient_upazila}
                    </td>
                    <td className="text-gray-600">
                      {req.donation_date} <br />
                      <span className="text-xs text-gray-400">
                        {req.donation_time}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold 
                                                ${
                                                  req.status === "pending"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : req.status ===
                                                      "inprogress"
                                                    ? "bg-blue-100 text-blue-700"
                                                    : req.status === "done"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                }`}
                      >
                        {req.status}
                      </span>
                    </td>
                    <td>
                      {req.status === "inprogress" ? (
                        <div className="text-xs leading-tight">
                          <p className="font-bold">
                            {req.donorName || "Assigned"}
                          </p>
                          <p className="text-gray-500">{req.donorEmail}</p>
                        </div>
                      ) : (
                        <span className="text-gray-300 italic text-xs">
                          Not assigned
                        </span>
                      )}
                    </td>
                    <td className="py-4">
                      <div className="flex justify-center items-center gap-3">
                        {/* In Progress Actions */}
                        {req.status === "inprogress" && (
                          <>
                            <button
                              onClick={() =>
                                handleStatusUpdate(req._id, "done")
                              }
                              className="text-green-600 hover:text-green-800 transition-transform hover:scale-110"
                              title="Mark Done"
                            >
                              <CheckCircle size={20} />
                            </button>
                            <button
                              onClick={() =>
                                handleStatusUpdate(req._id, "canceled")
                              }
                              className="text-red-600 hover:text-red-800 transition-transform hover:scale-110"
                              title="Cancel"
                            >
                              <XCircle size={20} />
                            </button>
                          </>
                        )}

                        {/* Standard Actions */}
                        <Link
                          to={`/dashboard/update-request/${req._id}`}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <Edit size={18} />
                        </Link>
                        <button
                          onClick={() => handleDelete(req._id)}
                          className="text-red-400 hover:text-red-600"
                        >
                          <Trash2 size={18} />
                        </button>
                        <Link
                          to={`/donation-details/${req._id}`}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <Eye size={18} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 3. View All Button */}
          <div className="mt-8 text-center lg:text-left">
            <Link to="/dashboard/my-donation-requests">
              <button className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-all shadow-md">
                View My All Requests
              </button>
            </Link>
          </div>
        </div>
      ) : (
        /* This section is hidden if user has no requests */
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-lg">
            You haven't made any donation requests yet.
          </p>
          <Link
            to="/dashboard/create-donation-request"
            className="text-red-600 font-bold underline mt-2 block"
          >
            Create your first request
          </Link>
        </div>
      )}
    </div>
  );
};

export default DonorDashboardHome;
