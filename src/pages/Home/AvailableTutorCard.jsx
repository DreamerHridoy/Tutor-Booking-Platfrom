import React from "react";
import { Link } from "react-router-dom";

const AvailableTutorCard = ({ tutor }) => {
  const { _id, name, image, language, price, review, details } = tutor;
  return (
    <div className="w-full max-w-sm border rounded-lg shadow-lg p-4 flex flex-col">
      {/* Tutor Image */}
      <img
        src={tutor.image}
        alt={`${tutor.name}`}
        className="rounded-md w-full h-40 object-cover"
      />
      {/* Tutor Info */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{tutor.name}</h3>
        <p className="text-sm text-gray-500">{tutor.language}</p>
        <p className="text-sm text-gray-500 mt-1">
          ⭐ {tutor.review} ({tutor.price} USD/hour)
        </p>
        <p className="mt-2 text-sm">{tutor.details}</p>
      </div>
      {/* CTA Button */}
      <Link to={`/tutors/${_id}`}>
        <button
          className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition"
          onClick={() => alert(`Booking trial lesson with ${tutor.name}`)}
        >
          Book Trial Lesson
        </button>
      </Link>
    </div>
  );
};

export default AvailableTutorCard;
