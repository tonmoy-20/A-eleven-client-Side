import React, { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecqure";

const Donate = () => {
  const [payRequest, setPayRequest] = useState([]);

  const [totalRequest, setTotalRequest] = useState(0);

  const [itemsPerPage, setItemsPerPage] = useState(3);

  const [currentPage, setCurrentPage] = useState(1);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/all-payments?page=${currentPage - 1}&size=${itemsPerPage}`)
      .then((res) => {
        setPayRequest(res.data.request);
        setTotalRequest(res.data.totalRequest);
      });
  }, [axiosSecure, currentPage, itemsPerPage]);
  const numberOfPage = Math.ceil(totalRequest / itemsPerPage);
  const page = [...Array(numberOfPage).keys()].map((e) => e + 1);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < page.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  //

  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);

  const handleCheckout = (e) => {
    e.preventDefault();

    const donateAmount = e.target.donateAmount.value;
    const donorEmail = user?.email;
    const donorName = user?.displayName;

    const formData = {
      donorEmail,
      donateAmount,
      donorName,
    };

    axiosInstance.post("/create-payment-checkout", formData).then((res) => {
      console.log(res.data);
      window.location.href = res.data.url;
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-amber-700 text-center mt-4">
        Please Donate
      </h2>
      <form
        onSubmit={handleCheckout}
        className="flex justify-center items-center min-h-50 gap-5"
      >
        <input
          name="donateAmount"
          type="number"
          placeholder="Type here"
          className="input"
        />
        <button className="btn btn-accent text-white" type="submit">
          Donate
        </button>
      </form>
      {/* table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th> </th>
                <th>Donor Name</th>
                <th>Donate Amount</th>
                <th>Donate Date</th>
                <th> Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {payRequest.map((request, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{request?.donorName} </td>
                  <td>${request?.amount} </td>
                  <td>{new Date(request?.paidAt).toLocaleDateString()} </td>
                  <td>{request?.payment_status} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-12 gap-4 mb-3">
          <button onClick={handlePrev} className="btn mr-4">
            Pev
          </button>
          {page.map((p) => (
            <button
              onClick={() => setCurrentPage(p)}
              className={`btn mr-4 ${
                p === currentPage ? "bg-[#435585] text-white" : ""
              }`}
            >
              {p}
            </button>
          ))}
          <button onClick={handleNext} className="btn ml-4">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
