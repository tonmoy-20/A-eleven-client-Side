import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    console.log({ name, email, message });
    form.reset();
    alert("Thank you for contacting us!");
  };

  return (
    <div className="container mx-auto my-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-600 mb-2">Contact Us</h2>
        <p className="">Have questions? We are here to help!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8  p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold ">Get in Touch</h3>

          <div className="flex items-center gap-4">
            <div className="bg-red-600 p-4 rounded-full ">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-sm  uppercase tracking-wide">Call Us</p>
              <p className="text-lg font-bold">+880 1234-567890</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-red-600 p-4 rounded-full ">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-sm  uppercase tracking-wide">Email Us</p>
              <p className="text-lg font-bold">support@droplife.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-red-600 p-4 rounded-full ">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-sm  uppercase tracking-wide">Location</p>
              <p className="text-lg font-bold">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className=" p-8 rounded-2xl shadow-lg border">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label text-sm font-semibold">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full focus:outline-red-500"
                required
              />
            </div>

            <div className="form-control">
              <label className="label text-sm font-semibold">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:outline-red-500"
                required
              />
            </div>

            <div className="form-control">
              <label className="label text-sm font-semibold mr-2">
                Message
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full h-32 focus:outline-red-500"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn bg-red-600 hover:bg-red-700 text-white w-full mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
