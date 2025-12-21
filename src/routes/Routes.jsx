import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayout/RootLayout";
import Home from "../pages/Home";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import DashboardLayout from "../DashbordLayout/DashboardLayout";
import MainDashboardLayout from "../pages/Dashboard/MaindashboardLayout/MainDashboardLayout";

import AddRequest from "../pages/Dashboard/AddRequest/AddRequest";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyRequest from "../pages/Dashboard/MyRequest/MyRequest";
import Donate from "../pages/Donate/Donate";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import SearchRequest from "../pages/searchRequest/SearchRequest";
import MyProfile from "../pages/Profile/MyProfile";
import Blogs from "../pages/Blogs";
import BlogsDetails from "../pages/BlogsDetails";
import AllBloodDonationRequest from "../pages/AllRequest/AllBloodDonationRequest";
import AdminDashboard from "../pages/Dashboard/MaindashboardLayout/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/search-request",
        element: <SearchRequest></SearchRequest>,
      },
      {
        path: "/search-request",
        element: <SearchRequest></SearchRequest>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/all-blood-donation-request",
        element: <AllBloodDonationRequest></AllBloodDonationRequest>,
      },

      {
        path: "/blogs/:id",
        element: <BlogsDetails></BlogsDetails>,
      },
      {
        path: "/donate",
        element: (
          <PrivateRoute>
            <Donate></Donate>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment-success",
        element: <PaymentSuccess></PaymentSuccess>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MainDashboardLayout />,
      },
      {
        path: "admin-das",
        element: <AdminDashboard />,
      },

      {
        path: "add-request",
        element: <AddRequest />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "my-request",
        element: <MyRequest />,
      },
      {
        path: "my-profile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
]);

export default router;
