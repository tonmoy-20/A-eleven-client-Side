import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-[1000]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box 
            z-[1100] mt-3 w-52 p-2 shadow-2xl border border-gray-100"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/all-blood-donation-request"}>
                Blood Donation Request
              </Link>
            </li>

            <li>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link to={"/donate"}>Fund</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl  font-bold gap-2 flex">
          <div>
            <span className=" text-red-500 ">
              Life
              <span className=" text-red-500  font-bold ">Drop</span>
            </span>
          </div>
          <div>
            <img className="w-8 h-8 object-contain" src={logo} alt="Logo" />
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/all-blood-donation-request"}>
              Blood Donation Request
            </Link>
          </li>
          <li>
            <Link to={"/blogs"}>Blogs</Link>
          </li>
          <li>
            <Link to={"/donate"}>Fund</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <Link
          to={"/dashboard"}
          className="btn btn-dash btn-primary btn-xs md:btn-sm"
        >
          Dashboard
        </Link>
        {user ? (
          <div className="flex items-center gap-2">
            <img
              src={user?.photoURL}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-red-500 object-cover"
            />
            <button
              onClick={logout}
              className="btn btn-sm btn-outline btn-error"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-sm md:btn-md btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
