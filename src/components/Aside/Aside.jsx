import { NavLink } from "react-router";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  LogOut,
  ShieldCheck,
  ShoppingBasket,
} from "lucide-react";
import { MdOutlineAddCircle } from "react-icons/md";

const Aside = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
      isActive
        ? "bg-indigo-600 text-white shadow-md"
        : "text-gray-300 hover:bg-gray-800 hover:text-white"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-gray-900 flex flex-col">
      {/* Logo / Header */}
      <div className="px-6 py-5 border-b border-gray-800">
        <h2 className="text-2xl font-bold text-white">Admin Panel</h2>
        <p className="text-sm text-gray-400">Control Dashboard</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavLink to="/dashboard" className={linkClass}>
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>
        {/* 
        <NavLink to="/dashboard/users" className={linkClass}>
          <Users size={20} />
          Manage Users
        </NavLink> */}

        <NavLink to="/dashboard/add-request" className={linkClass}>
          <MdOutlineAddCircle size={20} />
          Add Request
        </NavLink>

        <NavLink to="/dashboard/manage-products" className={linkClass}>
          <ShoppingBasket size={20} />
          Manage Products
        </NavLink>

        <NavLink to="/dashboard/settings" className={linkClass}>
          <Settings size={20} />
          Settings
        </NavLink>
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-800">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500 hover:text-white transition">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Aside;
