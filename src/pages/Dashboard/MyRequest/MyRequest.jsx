import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecqure";

const MyRequest = () => {
  const [myRequest, setMyRequest] = useState([]);

  const [totalRequest, setTotalRequest] = useState(0);

  const [itemsPerPage, setItemsPerPage] = useState(10);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/my-request?page=0&size=10").then((res) => {
      setMyRequest(res.data.request);
      setTotalRequest(res.data.totalRequest);
    });
  }, [axiosSecure]);
  const numberOfPage = Math.ceil(totalRequest / itemsPerPage);
  console.log(myRequest);
  console.log(totalRequest);
  console.log(numberOfPage);

  return <div>my request</div>;
};

export default MyRequest;
