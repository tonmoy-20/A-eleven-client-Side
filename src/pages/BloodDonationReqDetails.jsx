import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const DonationDetails = () => {
  const { id } = useParams();
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(
          `https://lifedrop-rosy.vercel.app/requests/${id}`
        );
        setRequest(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!request) {
    return <p className="text-center mt-20">Request not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 mt-6 mb-6 bg-amber-400 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Donation Request Details
      </h2>

      <div className="space-y-3">
        <p>
          <strong>Recipient Name:</strong> {request.requester_name}
        </p>
        <p>
          <strong>Blood Group:</strong> {request.bloodGroup}
        </p>
        <p>
          <strong>Location:</strong> {request.requester_district},{" "}
          {request.requester_upazila}
        </p>
        <p>
          <strong>Hospital:</strong> {request.hospitalName}
        </p>
        <p>
          <strong>Status:</strong> {request.donation_status}
        </p>
        <p>
          <strong>Date:</strong>{" "}
          {new Date(request.createdAt).toLocaleDateString()}
        </p>
        <p>
          <strong>Details:</strong> {request.details}
        </p>
      </div>
    </div>
  );
};

export default DonationDetails;
