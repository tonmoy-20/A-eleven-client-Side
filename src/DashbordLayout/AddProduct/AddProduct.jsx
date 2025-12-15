import axios from "axios";
import React, { useContext, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../Provider/AuthProvider";

const AddProduct = () => {
  const [showOnHome, setShowOnHome] = useState(false);
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const description = form.description.value;
    const category = form.category.value;
    const price = form.price.value;
    const MOQ = form.MOQ.value;
    const availableQuality = form.availableQuality.value;
    const paymentOption = form.paymentOption.value;
    const productImage = form.productImage;
    const file = productImage.files[0];

    const res = await axios.post(
      `https://api.imgbb.com/1/upload?&key=688e2440418a958b2594653438e1a787`,
      { image: file },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    const mainUrl = res.data.data.display_url;

    const formData = {
      productName,
      description,
      category,
      price: parseInt(price),
      MOQ: parseInt(MOQ),
      availableQuality: parseInt(availableQuality),
      productImage: mainUrl,
      paymentOption,
      showOnHome,
      managerEmail: user?.email,
    };

    if (res.data.success == true) {
      axiosInstance
        .post("/products", formData)
        .then((res) => {
          console.log(res.data);
          alert(res.data.insertedId);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div class="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800">Add New Product</h2>

      <form onSubmit={handleAddProduct} class="space-y-5">
        {/* <!-- Product Name --> */}
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            name="productName"
            type="text"
            placeholder="Enter product name"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* <!-- Product Description --> */}
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Product Description
          </label>
          <textarea
            name="description"
            rows="4"
            placeholder="Enter product details"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          ></textarea>
        </div>

        {/* <!-- Category --> */}
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            name="category"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          >
            <option value="">Select category</option>
            <option value="t-shirt">T-Shirt</option>
            <option value="pant">Pant</option>
            <option value="jacket">Jacket</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>

        {/* <!-- Price --> */}
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Price (৳ BTD)
          </label>
          <input
            name="price"
            type="number"
            min="0"
            placeholder="Enter price"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* <!-- Quantity Section --> */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Minimum Order Quantity
            </label>
            <input
              name="MOQ"
              type="number"
              min="1"
              placeholder="Minimum order"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Available Quantity
            </label>
            <input
              name="availableQuality"
              type="number"
              min="0"
              placeholder="Available stock"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        </div>

        {/* <!-- Image Upload --> */}
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Upload Product Images
          </label>
          <input
            name="productImage"
            type="file"
            multiple
            class="w-full px-3 py-2 border rounded-lg cursor-pointer"
            accept="image/*"
          />
          <p class="text-xs text-gray-500 mt-1">
            You can upload multiple images
          </p>
        </div>

        {/* <!-- Payment Option --> */}
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Payment Option
          </label>
          <select
            name="paymentOption"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          >
            <option value="">Select payment option</option>
            <option value="cod">Cash on Delivery</option>
            <option value="payfirst">Pay First</option>
          </select>
        </div>

        {/* <!-- Show on Home Page --> */}
        <div class="flex items-center gap-3">
          <input
            checked={showOnHome}
            onChange={() => setShowOnHome(!showOnHome)}
            type="checkbox"
            class="w-5 h-5 text-blue-600 border-gray-300 rounded"
          />
          <label class="text-sm text-gray-700">Show on Home Page</label>
        </div>

        {/* <!-- Submit Button --> */}
        <div class="pt-4">
          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
