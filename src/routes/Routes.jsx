import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayout/RootLayout";
import Home from "../pages/Home";
import Login from "./../pages/Login";
import Register from "./../pages/Register";

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
    ],
  },
]);

export default router;
