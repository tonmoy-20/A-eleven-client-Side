import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecqure";
import toast from "react-hot-toast";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);

  const fetchUser = () => {
    axiosSecure.get("/users").then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    fetchUser();
  }, [axiosSecure]);

  //  (Active/Block)
  const handleStatusChange = (email, status) => {
    axiosSecure
      .patch(`/update/user/status?email=${email}&status=${status}`)
      .then((res) => {
        console.log(res.data);
        toast.success(`User is now ${status}`);
        fetchUser();
      });
  };

  //  (Admin/Volunteer)
  const handleRoleChange = (email, role) => {
    axiosSecure
      .patch(`/update/user/role?email=${email}&role=${role}`)
      .then((res) => {
        console.log(res.data);

        toast.success(`User role updated to ${role}`);
        fetchUser();
      });
  };

  return (
    <div className="p-5">
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="table">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th>Avatar & Name</th>
              <th>Address & Email</th>
              <th>Status</th>
              <th className="text-center">Role Actions</th>
              <th>Status Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user?.mainUrl} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.name}</div>
                      <div className="text-xs badge badge-ghost uppercase">
                        {user?.role}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-sm font-medium">{user?.district}</div>
                  <span className="text-xs opacity-60">{user?.email}</span>
                </td>
                <td>
                  <span
                    className={`badge badge-sm ${
                      user?.status === "active"
                        ? "badge-success"
                        : "badge-error"
                    }`}
                  >
                    {user?.status}
                  </span>
                </td>

                {/* role change */}
                <td className="text-center space-x-1">
                  {user?.role !== "volunteer" && (
                    <button
                      onClick={() => handleRoleChange(user?.email, "volunteer")}
                      className="btn btn-outline btn-info btn-xs"
                    >
                      Make Volunteer
                    </button>
                  )}
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleRoleChange(user?.email, "admin")}
                      className="btn btn-outline btn-warning btn-xs"
                    >
                      Make Admin
                    </button>
                  )}
                </td>

                {/* (Block/Active) */}
                <th>
                  {user?.status === "active" ? (
                    <button
                      onClick={() => handleStatusChange(user?.email, "blocked")}
                      className="btn btn-error btn-xs"
                    >
                      Block
                    </button>
                  ) : (
                    <button
                      onClick={() => handleStatusChange(user?.email, "active")}
                      className="btn btn-accent btn-xs"
                    >
                      Unblock
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
