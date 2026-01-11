import React from "react";
import {
  FaSearchLocation,
  FaShieldAlt,
  FaUsers,
  FaHandHoldingHeart,
} from "react-icons/fa";

const FeaturedSection = () => {
  const features = [
    {
      id: 1,
      icon: <FaSearchLocation className="text-4xl text-red-600" />,
      title: "Quick Search",
      description:
        "Find blood donors near your location in seconds with our advanced filtering system.",
    },
    {
      id: 2,
      icon: <FaShieldAlt className="text-4xl text-red-600" />,
      title: "Secure Payments",
      description:
        "Every donation and payment is protected with Stripe's industry-leading security.",
    },
    {
      id: 3,
      icon: <FaUsers className="text-4xl text-red-600" />,
      title: "Verified Community",
      description:
        "We verify every donor and requester to ensure a safe and reliable experience.",
    },
    {
      id: 4,
      icon: <FaHandHoldingHeart className="text-4xl text-red-600" />,
      title: "Free Requests",
      description:
        "Requesting for blood is and will always be free. We are here to save lives.",
    },
  ];

  return (
    <div className=" py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-red-500 mb-4">
            Our Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className=" p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border-b-4 border-transparent hover:border-red-600"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-red-50 rounded-full">{feature.icon}</div>
              </div>
              <h4 className="text-xl font-bold  mb-3">{feature.title}</h4>
              <p className=" leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
