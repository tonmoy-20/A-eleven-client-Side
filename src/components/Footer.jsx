import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-red-600 p-2 rounded-full">
                <img className="w-25" src={logo} alt="DropOfLife Logo" />
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

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-sky-500 transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/search-request" className="hover:text-red-500">
                  Search Blood
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-red-500">
                  Donate Now
                </Link>
              </li>
              <li>
                <Link
                  to="/all-blood-donation-request"
                  className="hover:text-red-500"
                >
                  Blood Requests
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-red-500">
                  Join as Donor
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-red-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-red-500">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-red-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-red-500">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-red-500 font-bold">Location:</span> Dhaka,
                Bangladesh
              </li>
              <li>
                <span className="text-red-500 font-bold">Email:</span>{" "}
                support@droplife.com
              </li>
              <li>
                <span className="text-red-500 font-bold">Phone:</span> +880 1234
                567 890
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-gray-800" />

        <div className="text-center text-xs">
          © {new Date().getFullYear()} DropOfLife. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
