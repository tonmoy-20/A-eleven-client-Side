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
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-rose-600">
        Blood Donation Blogs
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className=" border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
          >
            {/* Blog Image */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>

            {/* Blog Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold  mb-3 line-clamp-2">
                {blog.title}
              </h3>

              <p className=" text-sm mb-4 line-clamp-3">
                {blog.shortDescription}
              </p>

              <div className="flex justify-between items-center text-sm  mb-4">
                <span>{blog.author}</span>
                <span>{blog.publishedDate}</span>
              </div>

              <Link
                to={`/blogs/${blog.id}`}
                className="mt-auto block text-center rounded-full bg-rose-600 py-2 text-white font-medium hover:bg-rose-700 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
