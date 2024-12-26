import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddTutorial = () => {
  const { user } = useAuth();
  const handleAddTutorial = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData);

    fetch("http://localhost:5000/tutors", {
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
            title: "New Tutor Added Succesfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-center ">Add Tutorials Page</h2>
      <form onSubmit={handleAddTutorial} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.value}
            placeholder="Enter your name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="Enter your email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="file"
            defaultValue={user?.image}
            name="image"
            className="input input-bordered"
            accept="image/*"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Language</span>
          </label>
          <select name="language" className="select select-bordered" required>
            <option value="">Select a language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            placeholder="Enter description"
            name="description"
            className="textarea textarea-bordered"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Review</span>
          </label>
          <textarea
            placeholder="Enter review or feedback"
            name="review"
            className="textarea textarea-bordered"
            rows="4"
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddTutorial;
