import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTutorial = () => {
  const { id } = useParams();
  const [tutorial, setTutorial] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/tutors/${id}`)
      .then((res) => res.json())
      .then((data) => setTutorial(data));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (
      !tutorial.image ||
      !tutorial.language ||
      !tutorial.price ||
      !tutorial.description
    ) {
      Swal.fire("Error!", "Please fill all the required fields.", "error");
      return;
    }

    const { _id, name, email, review, ...updateData } = tutorial;

    fetch(`http://localhost:5000/tutors/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Tutorial updated successfully.", "success");
          navigate("/myTutorials");
        } else {
          Swal.fire("Error!", "Failed to update tutorial.", "error");
        }
      })
      .catch((err) => Swal.fire("Error!", err.message, "error"));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Update Tutorial</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={tutorial.name || ""}
            disabled
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={tutorial.email || ""}
            disabled
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Image URL</label>
          <input
            type="text"
            name="image"
            value={tutorial.image || ""}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Language</label>
          <input
            type="text"
            name="language"
            value={tutorial.language || ""}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={tutorial.price || ""}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={tutorial.description || ""}
            onChange={handleInputChange}
            className="textarea textarea-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Review</label>
          <input
            type="text"
            name="review"
            value={tutorial.review || ""}
            disabled
            className="input input-bordered w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateTutorial;
