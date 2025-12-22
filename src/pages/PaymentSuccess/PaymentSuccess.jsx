import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import useAxios from "../../hooks/useAxios";
import { CheckCircleIcon } from "lucide-react";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();

  const sessionId = searchParams.get("session_id");

  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance
      .post(`/success-payment?session_id=${sessionId}`)
      .then((res) => {
        console.log(res.data);
      });
  }, [axiosInstance, sessionId]);
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-md w-full">
          <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            Payment Successful!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your payment. Your transaction has been completed
            successfully.
          </p>
          <Link
            to="/"
            className="inline-block bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
