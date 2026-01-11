import React from "react";
import aboutImage from "../assets/logo.png"; // You can replace with your image
import missionImage from "../assets/herob3.jpg"; // Optional secondary image
import { Link } from "react-router";

const About = () => {
  return (
    <div className="w-11/12 mx-auto py-16">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-rose-600 mb-8">
        About LifeDrop
      </h1>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="md:w-1/2">
          <img
            src={aboutImage}
            alt="LifeDrop Blood Donation"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold \">
            Saving Lives, One Drop at a Time
          </h2>
          <p className=" text-justify">
            LifeDrop is a dedicated blood donation platform created to connect
            blood donors with those in need. We aim to simplify and streamline
            the blood donation process by providing a trusted platform where
            donors, recipients, and organizations can collaborate efficiently.
          </p>
          <p className=" text-justify">
            Our platform allows users to register as blood donors, view blood
            donation requests, and respond quickly to emergencies. By leveraging
            technology and community engagement, we strive to save lives and
            ensure a steady supply of blood for hospitals and clinics across
            Bangladesh.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-16">
        <div className="md:w-1/2">
          <img
            src={missionImage}
            alt="Our Mission"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold ">Our Mission</h2>
          <ul className="list-disc list-inside ">
            <li>Connect blood donors with people in need efficiently.</li>
            <li>Raise awareness about voluntary blood donation.</li>
            <li>Ensure timely availability of blood for emergencies.</li>
            <li>Encourage a responsible and safe donor community.</li>
          </ul>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          How LifeDrop Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className=" shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-rose-600 mb-2">
              Register as a Donor
            </h3>
            <p className="">
              Sign up and create your donor profile with your blood group and
              location.
            </p>
          </div>
          <div className=" shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-rose-600 mb-2">
              View Requests
            </h3>
            <p className="">
              Browse through blood requests and find people who need your help
              nearby.
            </p>
          </div>
          <div className=" shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-rose-600 mb-2">
              Donate & Save Lives
            </h3>
            <p className="">
              Respond to requests, coordinate with recipients, and make a
              difference.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-rose-600 text-white text-center rounded-xl py-12 px-6 shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Join LifeDrop Today!</h2>
        <p className="mb-6">
          Be a part of our lifesaving community. Your blood donation can save
          countless lives.
        </p>
        <Link
          to="/signup"
          className="inline-block bg-white text-rose-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Become a Donor
        </Link>
      </div>
    </div>
  );
};

export default About;
