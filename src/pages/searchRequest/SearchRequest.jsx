import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";

const SearchRequest = () => {
  const [upazilas, setUpazilas] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState("");
  const [upozila, setUpozila] = useState("");

  // search result state
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const axiosInstance = useAxios();

  useEffect(() => {
    axios.get("./upazila.json").then((res) => {
      setUpazilas(res.data.upazilas);
    });

    axios.get("./district.json").then((res) => {
      setDistricts(res.data.districts);
    });
  }, []);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const bloodGroup = e.target.blood.value;

  //   axiosInstance
  //     .get(
  //       `/requests-search?bloodGroup=${bloodGroup}&district=${district}&upazila=${upozila}`
  //     )
  //     .then((res) => {
  //       setSearchResults(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setLoading(false);
  //     });
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);

    const bloodGroup = e.target.blood.value;

    const selectedGroup = bloodGroup === "Choose Blood Group" ? "" : bloodGroup;

    axiosInstance
      .get(
        `/requests-search?bloodGroup=${selectedGroup}&district=${district}&upazila=${upozila}`
      )
      .then((res) => {
        setSearchResults(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);

        setLoading(false);
      });
  };
  return (
    <div className="container mx-auto p-5">
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <form
          onSubmit={handleSearch}
          className="flex flex-wrap gap-4 justify-center items-end"
        >
          <div className="flex flex-col">
            <label className="text-sm mb-1 font-semibold text-gray-600">
              Blood Group
            </label>
            <select
              name="blood"
              defaultValue="Choose Blood Group"
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled>Choose Blood Group</option>
              {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(
                (group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1 font-semibold text-gray-600">
              District
            </label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="">Select District</option>
              {districts.map((d) => (
                <option value={d?.name} key={d?.id}>
                  {d?.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1 font-semibold text-gray-600">
              Upazila
            </label>
            <select
              value={upozila}
              onChange={(e) => setUpozila(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="">Select Upazila</option>
              {upazilas.map((u) => (
                <option value={u?.name} key={u?.id}>
                  {u?.name}
                </option>
              ))}
            </select>
          </div>

          <button className="btn btn-success px-8">Search</button>
        </form>
      </div>

      {loading ? (
        <div className="text-center font-bold text-red-500">Searching...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.length > 0 ? (
            searchResults.map((request) => (
              <div
                key={request._id}
                className="card bg-base-100 shadow-xl border-t-4 border-red-500"
              >
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <h2 className="card-title text-red-600 font-bold text-2xl">
                      {request.bloodGroup}
                    </h2>
                    <div className="badge badge-outline">
                      {request.status || "Pending"}
                    </div>
                  </div>
                  <p className="mt-2">
                    <strong>Requester:</strong> {request.requester_name}
                  </p>
                  <p>
                    <strong>Location:</strong> {request.requester_upazila},{" "}
                    {request.requester_district}
                  </p>
                  <p>
                    <strong>Date:</strong> {request.donation_date}
                  </p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary btn-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 mt-10">
              No donation requests found. Try different filters.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchRequest;
