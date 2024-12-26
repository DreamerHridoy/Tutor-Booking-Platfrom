import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MyTutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/tutors")
      .then((res) => res.json())
      .then((data) => setTutorials(data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tutors/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your tutorial has been deleted.",
                "success"
              );
              setTutorials(tutorials.filter((tutorial) => tutorial._id !== id));
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/updateTutorial/${id}`);
  };

  return (
    <div>
      <h2 className="text-3xl text-center my-4">My Tutorials</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Language</th>
              <th>Price</th>
              <th>Description</th>
              <th>Review</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tutorials.map((tutorial, index) => (
              <tr key={tutorial._id}>
                <td>{index + 1}</td>
                <td>{tutorial.name}</td>
                <td>
                  <img
                    src={tutorial.image}
                    alt={tutorial.name}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td>{tutorial.language}</td>
                <td>${tutorial.price}</td>
                <td>{tutorial.description}</td>
                <td>{tutorial.review || "No review"}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(tutorial._id)}
                    className="btn btn-sm btn-warning"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(tutorial._id)}
                    className="btn btn-sm btn-error ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutorials;
