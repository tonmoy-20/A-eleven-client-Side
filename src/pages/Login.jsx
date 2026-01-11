import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { setUser, handleGoogleSignIn } = useContext(AuthContext);
  // const { setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  // const [setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        toast.success("Login Successfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => console.log(err));
  };

  const handleForget = () => {
    navigate(`/forget/${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-4">
      <div className="w-full max-w-md backdrop-blur-xl bg-white/90 rounded-2xl shadow-2xl border border-white/20">
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <h1 className="text-3xl font-bold text-center text-gray-800">
              Welcome Back
            </h1>
            <p className="text-center text-gray-500 text-sm">
              Login to continue to your account
            </p>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                className="input input-bordered w-full mt-1 focus:ring-2 focus:ring-purple-500"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="input input-bordered w-full mt-1"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <button
                type="button"
                onClick={handleForget}
                className="text-sm text-purple-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button className="btn w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-none hover:opacity-90">
              Login
            </button>

            {/* Divider */}
            <div className="divider text-sm">OR</div>

            {/* Google Login */}
            <button
              type="button"
              onClick={googleSignIn}
              className="btn w-full  border border-gray-300 hover:bg-gray-100 flex gap-2"
            >
              <FcGoogle className="text-2xl" />
              Continue with Google
            </button>

            {/* Register */}
            <p className="text-sm text-center text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="text-purple-600 font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
