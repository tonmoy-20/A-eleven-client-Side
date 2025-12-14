import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
const notify = () => toast(" Successfully Registerd.");
const Register = () => {
  const { registerWithEmailPassword, user, setUser, handleGoogleSignIn } =
    useContext(AuthContext);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const photourl = e.target.photoUrl;

    const file = photourl.files[0];
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    if (pass.length < 6) {
      return alert("less than 6 characters");
    }
    if (!uppercase.test(pass)) {
      return alert("Need a UpperCase");
    }
    if (!lowercase.test(pass)) {
      return alert("Need a Lower Case");
    }

    const res = await axios.post(
      `https://api.imgbb.com/1/upload?&key=688e2440418a958b2594653438e1a787`,
      { image: file },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    const mainUrl = res.data.data.display_url;

    const formData = {
      email,
      pass,
      name,
      mainUrl,
    };

    if (res.data.success == true) {
      registerWithEmailPassword(email, pass)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: mainUrl,
          })
            .then(() => {
              setUser(userCredential.user);
              axios
                .post("http://localhost:5000/users", formData)
                .then((res) => {
                  console.log(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const googleSignUp = () => {
    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((err) => console.log(err));
  };

  console.log(user);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-100 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handelSubmit} className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Your Name"
                />
                <label className="label">PhotoURL</label>
                <input
                  name="photoUrl"
                  type="file"
                  className="input"
                  placeholder="Your PhotoUrl"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                {/* <div>
                  <a className="link link-hover">Forgot password?</a>
                </div> */}
                <button onClick={googleSignUp} className="btn  ">
                  <FcGoogle />o o g l e
                </button>
                <div>
                  <span>Already have an account? </span>
                  <Link className="text-blue-500 font-medium" to="/login">
                    Login
                  </Link>
                </div>
                <button onClick={notify} className="btn btn-neutral mt-4">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
