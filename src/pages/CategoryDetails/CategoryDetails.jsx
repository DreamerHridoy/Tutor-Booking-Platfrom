import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";

const CategoryDetails = () => {
  const { user } = useContext(AuthContext);

  const { tutorEmail, _id, image, language, price, details } = useLoaderData();

  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-6">
      {/* Tutor ID */}
      <h2 className="text-lg font-bold text-gray-700 mb-4">Tutor ID: {_id}</h2>

      {/* Tutor Image */}
      <img
        src={image}
        alt="Tutor"
        className="w-full h-56 object-cover rounded-md mb-4"
      />

      {/* Language */}
      <p className="text-gray-600">
        <strong>Language:</strong> {language}
      </p>

      {/* Price */}
      <p className="text-gray-600">
        <strong>Price:</strong> ${price}/hour
      </p>

      <h2 className="text-lg font-bold text-gray-600 mb-4">
        Details:{details}
      </h2>
      <h2 className="text-lg font-bold text-gray-600 mb-4">
        tutorEmail:{tutorEmail}
      </h2>
    </div>
  );
};

export default CategoryDetails;
