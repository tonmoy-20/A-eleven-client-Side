import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Users, IndianRupee, NotebookPen } from "lucide-react"; 
import useAxiosSecure from "../../../hooks/useAxiosSecqure";

const MainDashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [stats, setStats] = useState({
    totalDonors: 0,
    totalFunding: 0,
    totalRequests: 0,
  });

  useEffect(() => {
    axiosSecure.get("/admin-stats")
      .then(res => setStats(res.data))
      .catch(err => console.log(err));
  }, [axiosSecure]);

  return (
    <div className="p-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-10 shadow-lg mb-10 text-white">
        <h1 className="text-4xl font-bold">
          Welcome back, <span className="text-amber-300">{user?.displayName}!</span>
        </h1>
        <p className="mt-2 text-indigo-100 italic">
          "The best way to find yourself is to lose yourself in the service of others." — Mahatma Gandhi
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: Total Donors */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-xl">
            <Users size={32} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Total Donors</p>
            <h3 className="text-3xl font-bold text-gray-800">{stats.totalDonors}</h3>
          </div>
        </div>

        {/* Card 2: Total Funding */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
          <div className="p-4 bg-green-100 text-green-600 rounded-xl">
            <span className="text-2xl font-bold">$</span>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Total Funding</p>
            <h3 className="text-3xl font-bold text-gray-800">${stats.totalFunding}</h3>
          </div>
        </div>

        {/* Card 3: Total Requests */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
          <div className="p-4 bg-red-100 text-red-600 rounded-xl">
            <NotebookPen size={32} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Total Requests</p>
            <h3 className="text-3xl font-bold text-gray-800">{stats.totalRequests}</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MainDashboardLayout;