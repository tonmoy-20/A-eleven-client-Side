import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecqure";

const MyRequest = () => {
  const [myRequest, setMyRequest] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/my-request").then((res) => {
      console.log(res.data);
    });
  }, [axiosSecure]);

  return <div>my request</div>;
};

export default MyRequest;
