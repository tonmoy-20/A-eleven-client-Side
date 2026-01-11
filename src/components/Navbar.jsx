import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import logo from "../assets/logo.png";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const handleThemeChange = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    const theme = isChecked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isChecked]);

  const logout = () => {
    signOut(auth);
    setDropdownOpen(false);
  };

  return (
    <div className="sticky top-0 z-[1000] bg-gradient-to-r from-red-600 via-pink-600 to-rose-500 shadow-lg">
      <div className="navbar max-w-7xl mx-auto px-4 text-white">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-56 rounded-xl bg-white text-gray-800 shadow-xl border border-gray-100 p-2 z-[1100]"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/all-blood-donation-request">
                  Blood Donation Request
                </Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/donate">Fund</Link>
              </li>
              <li>
                <Link className="hover:text-yellow-300" to="/search-request">
                  Find Donor
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-white">
              Life<span className="font-extrabold">Drop</span>
            </span>
            <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 text-[16px] font-medium">
            <li>
              <Link className="hover:text-yellow-300" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellow-300"
                to="/all-blood-donation-request"
              >
                Blood Requests
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-300" to="/blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-300" to="/donate">
                Fund
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-300" to="/search-request">
                Find Donor
              </Link>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-3 relative flex items-center">
          {/* Dark Mode Toggle */}
          <button
            onClick={handleThemeChange}
            className="mr-3 p-2 rounded-full bg-white text-red-600 hover:bg-gray-200 transition"
          >
            {isChecked ? "☀️" : "🌙"}
          </button>

          <Link
            to="/dashboard"
            className="btn btn-sm rounded-full bg-white text-red-600 border-none hover:bg-gray-100"
          >
            Dashboard
          </Link>

          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL || "https://i.ibb.co/2kRkzGd/avatar.png"
                    }
                    alt="Profile"
                  />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-300  rounded-box w-52"
              >
                <li className="px-3 py-2 font-semibold">{user?.displayName}</li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/dashboard/my-profile">Profile</Link>
                </li>
                <li>
                  <button className="btn  btn-error" onClick={logout}>
                    <LogOut />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="relative px-5 py-2 rounded-full border-2 border-white font-medium text-white overflow-hidden transition-all hover:text-red-600 before:absolute before:inset-0 before:bg-white before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-300">
                <span className="relative z-10">Login</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
