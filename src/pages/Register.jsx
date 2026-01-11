import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const {
    registerWithEmailPassword,
    setUser,
    loading,
    setLoading,
    // handleGoogleSignin,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);

  const [upazilas, setUpazilas] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");

  useEffect(() => {
    axios.get("/upazila.json").then((res) => {
      setUpazilas(res.data.upazilas);
    });

    axios.get("/district.json").then((res) => {
      setDistricts(res.data.districts);
    });
  }, []);

  // console.log(districts);
  // console.log(upazilas);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const confirmPass = e.target.confirmPassword.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl;
    const file = photoUrl.files[0];
    const blood = e.target.blood.value;

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    if (pass.length < 6 || confirmPass.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Less then 6 characters!",
      });
    }
    if (!uppercase.test(pass) || !uppercase.test(confirmPass)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Need a Uppercase Latter!",
      });
    }
    if (!lowercase.test(pass) || !lowercase.test(confirmPass)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Need a lowercase Latter!",
      });
    }
    if (pass != confirmPass) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password and Confirm Password are not same!",
      });
    }

    Swal.fire({
      title: "Please wait...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=f597642f9c8f007109a3f030821c0edb`,
      { image: file },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    // console.log(res.data);

    const mainPhotoUrl = res.data.data.display_url;

    const formData = {
      email,
      name,
      mainPhotoUrl,
      blood,
      district,
      upazila,
    };

    if (res.data.success == true) {
      registerWithEmailPassword(email, pass)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: mainPhotoUrl,
          })
            .then(() => {
              setUser(userCredential.user);
              Swal.fire({
                title: "Registration Successful! 🎉",
                icon: "success",
                draggable: true,
              });
              // store users info in our DB
              axios
                .post("http://localhost:5000", formData)
                .then((res) => {
                  console.log(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });

              toast.success("Registration Successful! 🎉");
              // console.log(userCredential.user);
              setLoading(false);
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
              setLoading(false);
            });
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  // const googleSignup = () => {
  //   handleGoogleSignin()
  //     .then((result) => {
  //       const user = result.user;
  //       setUser(user);
  //       Swal.fire({
  //         title: "Registration Successful! 🎉",
  //         icon: "success",
  //         draggable: true,
  //       });
  //       toast.success("Signup Successful! 🎉");
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: "Signup Process failed❗ Please try again.",
  //       });
  //     });
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-4">
      <title>Register</title>

      <div className="w-full max-w-md backdrop-blur-xl bg-white/90 rounded-2xl mt-3 mb-3 shadow-2xl border border-white/20">
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-3xl font-bold text-center text-gray-800">
              Create Account
            </h1>
            <p className="text-center text-gray-500 text-sm">
              Join us by filling the information below
            </p>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input
                required
                name="email"
                type="email"
                className="input input-bordered w-full mt-1 focus:ring-2 focus:ring-purple-500"
                placeholder="you@example.com"
              />
            </div>

            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                required
                name="name"
                type="text"
                className="input input-bordered w-full mt-1"
                placeholder="Your Full Name"
              />
            </div>

            {/* Photo */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Profile Photo
              </label>
              <input
                required
                name="photoUrl"
                type="file"
                className="file-input file-input-bordered w-full mt-1"
              />
            </div>

            {/* Blood Group */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Blood Group
              </label>
              <select
                name="blood"
                defaultValue=""
                required
                className="select select-bordered w-full mt-1"
              >
                <option value="" disabled>
                  Select Blood Group
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            {/* District */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                District
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
                className="select select-bordered w-full mt-1"
              >
                <option value="" disabled>
                  Select Your District
                </option>
                {districts.map((d, index) => (
                  <option key={index} value={d?.name}>
                    {d?.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Upazila */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Upazila
              </label>
              <select
                value={upazila}
                onChange={(e) => setUpazila(e.target.value)}
                required
                className="select select-bordered w-full mt-1"
              >
                <option value="" disabled>
                  Select Your Upazila
                </option>
                {upazilas.map((u) => (
                  <option key={u?.id} value={u?.name}>
                    {u?.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  required
                  name="password"
                  type={showPass ? "text" : "password"}
                  className="input input-bordered w-full pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <div className="relative mt-1">
                <input
                  required
                  name="confirmPassword"
                  type={showPass ? "text" : "password"}
                  className="input input-bordered w-full pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Login Link */}
            <p className="text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-purple-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>

            {/* Register Button */}
            <button
              disabled={loading}
              className="btn w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-none hover:opacity-90"
            >
              Register
            </button>

            {/* Google */}
            {/* <div className="divider text-sm">OR</div>

            <button
              onClick={googleSignup}
              className="btn w-full bg-white border border-gray-300 hover:bg-gray-100 flex gap-2"
            >
              <FcGoogle className="text-2xl" />
              Continue with Google
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
