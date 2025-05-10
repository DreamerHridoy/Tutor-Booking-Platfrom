import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddTutorial = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddTutorial = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    fetch("https://tutor-booking-platform-server-side.vercel.app/tutors", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(initialData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "New Tutorial Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myTutorials");
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to add tutorial. Please try again.",
        });
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 p-6 shadow-lg bg-white rounded-md">
      <h2 className="text-3xl text-center font-bold mb-6">Add Tutorial</h2>
      <form onSubmit={handleAddTutorial} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName || ""}
            placeholder="Enter your name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email || ""}
            placeholder="Enter your email"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Image Field */}
        <div>
          <label className="block font-medium">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="file-input file-input-bordered w-full"
            required
          />
        </div>

        {/* Language Field */}
        <div>
          <label className="block font-medium">Language</label>
          <select
            name="language"
            className="select select-bordered w-full"
            required
          >
            <option value="">Select a language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Price Field */}
        <div>
          <label className="block font-medium">Price</label>
          <input
            type="number"
            name="price"
            min="0"
            placeholder="Enter price"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Description Field */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Enter description"
            className="textarea textarea-bordered w-full"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Review Field */}
        <div>
          <label className="block font-medium">Review</label>
          <input
            type="number"
            name="review"
            defaultValue="0"
            min="0"
            placeholder="Review (default 0)"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
