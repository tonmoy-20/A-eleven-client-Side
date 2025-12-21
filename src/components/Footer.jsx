import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-red-600 p-2 rounded-full">
                <img className="w-25" src={logo} alt="" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                DropOfLife
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              DropOfLife is a dedicated platform connecting blood donors with
              those in need. Join us in our mission to save lives through
              voluntary blood donation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/requests-search"
                  className="hover:text-red-500 transition-colors"
                >
                  Search Blood
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="hover:text-red-500 transition-colors"
                >
                  Donate Now
                </Link>
              </li>
              <li>
                <Link
                  to="/all-requests"
                  className="hover:text-red-500 transition-colors"
                >
                  Blood Requests
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="hover:text-red-500 transition-colors"
                >
                  Join as Donor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-red-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-red-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-red-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-red-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">Location:</span>
                Dhaka, Bangladesh
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">Email:</span>
                support@droplife.com
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">Phone:</span>
                +880 1234 567 890
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-gray-800" />
        <div className="flex flex-col  justify-center items-center text-xs">
          <p>© {new Date().getFullYear()} DropOfLife. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
