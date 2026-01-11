import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaUser, FaTint, FaHandsHelping } from "react-icons/fa";

const MainDashboardLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          Welcome,
          <span className="text-red-600 font-bold ml-2">
            {user?.displayName || "User"}
          </span>
        </h1>
        <p className="text-gray-500 mt-2">
          Manage your profile and blood donation activities from here.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center rounded-full text-xl">
            <FaUser />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Profile</h3>
            <p className="text-sm text-gray-500">
              Update your personal information
            </p>
          </div>
        </div>

        {/* Donations */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-100 text-amber-600 flex items-center justify-center rounded-full text-xl">
            <FaTint />
          </div>
          <div>
            <h3 className="text-lg font-semibold">My Donations</h3>
            <p className="text-sm text-gray-500">View your donation history</p>
          </div>
        </div>

        {/* Requests */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 text-green-600 flex items-center justify-center rounded-full text-xl">
            <FaHandsHelping />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Blood Requests</h3>
            <p className="text-sm text-gray-500">Requests you’ve helped with</p>
          </div>
        </div>
      </div>

      {/* User Info Section */}
      <div className="bg-white rounded-xl shadow p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Account Information</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <p>
            <span className="font-medium">Name:</span>{" "}
            {user?.displayName || "N/A"}
          </p>
          <p>
            <span className="font-medium">Email:</span> {user?.email || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainDashboardLayout;
