import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AllRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get("http://localhost:5000/requests", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        });
        setRequests(res.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load requests");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading)
    return (
      <div className="text-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        All Donation Requests
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Recipient Name</th>
              <th>Location</th>
              <th>Blood Group</th>
              <th>Date</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={request._id} className="hover">
                <th>{index + 1}</th>
                <td className="font-semibold">
                  {request?.requester_name || "N/A"}
                </td>
                <td>
                  {request?.requester_district}, {request?.requester_upazila}
                </td>
                <td>
                  <span className="badge badge-error text-white font-bold">
                    {request?.bloodGroup}
                  </span>
                </td>
                <td>{new Date(request.createdAt).toLocaleDateString()}</td>

                <td>
                  <button className="btn btn-sm btn-outline btn-info">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {requests.length === 0 && (
          <p className="text-center py-10 text-gray-500 text-lg">
            No requests found!
          </p>
        )}
      </div>
    </div>
  );
};

export default AllRequests;
