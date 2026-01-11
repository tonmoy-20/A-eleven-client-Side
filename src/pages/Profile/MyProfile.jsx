import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { CiEdit } from "react-icons/ci";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("/district.json").then((res) => setDistricts(res.data.districts));

    axios.get("/upazila.json").then((res) => setUpazilas(res.data.upazilas));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const bloodGroup = form.bloodGroup.value;
    const district = form.district.value;
    const upozila = form.upozila.value;
    const imageFile = form.photo.files[0];

    let currentPhotoURL = user?.photoURL;

    try {
      if (imageFile) {
        const formDataImg = new FormData();
        formDataImg.append("image", imageFile);
        const imgResponse = await axios.post(
          `https://api.imgbb.com/1/upload?key=688e2440418a958b2594653438e1a787`,
          formDataImg
        );
        currentPhotoURL = imgResponse.data.data.display_url;
      }

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: currentPhotoURL,
      });

      const updatedDataForDB = {
        name: name,
        image: currentPhotoURL,
        bloodGroup: bloodGroup,
        district: district,
        upozila: upozila,
      };

      const res = await axios.patch(
        `http://localhost:5000/users-update/${user?.email}`,
        updatedDataForDB
      );

      if (res.data.matchedCount > 0) {
        setUser({
          ...user,
          displayName: name,
          photoURL: currentPhotoURL,
          bloodGroup,
          district,
          upozila,
        });

        toast.success("Profile Updated Successfully!");
        setIsOpen(false);
      } else {
        toast.error("Database update failed!");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <Toaster />
      <div className="flex flex-col items-center mt-5 mb-3  p-6 md:p-10 rounded-2xl shadow-xl">
        {/* Profile Card */}
        <div className="avatar mb-4">
          <div className="ring-primary ring-offset-base-100 w-32 rounded-full ring-2 ring-offset-2">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="User"
            />
          </div>
        </div>
        <div className="text-center space-y-1">
          <h2 className="text-3xl font-bold text-gray-800">
            {user?.displayName}
          </h2>
          <p className=" font-medium">{user?.email}</p>
          <div className="flex gap-2 justify-center mt-2">
            <span className="badge badge-error p-3 ">
              {user?.bloodGroup || "N/A"}
            </span>
            <span className="badge badge-outline p-3">
              {user?.district || "No District"}
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`btn ${isOpen ? "btn-ghost" : "btn-neutral"} mt-6`}
        >
          {isOpen ? (
            "Cancel Editing"
          ) : (
            <>
              <CiEdit className="text-xl mr-2" /> Edit Profile
            </>
          )}
        </button>

        {/* Update Form */}
        {isOpen && (
          <form
            onSubmit={handleUpdate}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mt-10 border-t pt-10"
          >
            <div className="form-control">
              <label className="label font-semibold">Full Name</label>
              <input
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered focus:border-primary"
                required
              />
            </div>

            <div className="form-control">
              <label className="label font-semibold">Change Photo</label>
              <input
                type="file"
                name="photo"
                className="file-input file-input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label font-semibold">Blood Group</label>
              <select
                name="bloodGroup"
                defaultValue={user?.bloodGroup}
                className="select select-bordered"
              >
                {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(
                  (bg) => (
                    <option key={bg} value={bg}>
                      {bg}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="form-control">
              <label className="label font-semibold">District</label>
              <select
                name="district"
                defaultValue={user?.district}
                className="select select-bordered"
              >
                <option disabled>Select District</option>
                {districts.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label font-semibold">Upazila</label>
              <select
                name="upozila"
                defaultValue={user?.upozila}
                className="select select-bordered"
              >
                <option disabled>Select Upazila</option>
                {upazilas.map((u) => (
                  <option key={u.id} value={u.name}>
                    {u.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                disabled={loading}
                className="btn btn-primary w-full text-lg"
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Update Profile Now"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
