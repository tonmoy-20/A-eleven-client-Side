import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Spinner from "./Spinner";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-rose-600">
        Blood Donation Blogs
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <figure>
              <img
                src={blog.image}
                alt={blog.title}
                className="h-52 w-full object-cover rounded-t-lg"
              />
            </figure>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {blog.shortDescription}
              </p>

              <p className="text-sm font-medium text-gray-700">
                ✍ {blog.author}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                📅 {blog.publishedDate}
              </p>

              <Link
                to={`/blogs/${blog.id}`}
                className="block text-center w-full rounded-md bg-blue-500 py-2 text-white font-medium hover:bg-rose-600 transition"
              >
                Show Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
