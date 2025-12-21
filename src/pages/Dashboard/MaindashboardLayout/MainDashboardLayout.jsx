import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const MainDashboardLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className=" text-4xl text-center font-semibold">
        Welcome{" "}
        <span className="text-amber-700 font-bold">{user?.displayName}</span>
      </h1>
    </div>
  );
};

export default MainDashboardLayout;
