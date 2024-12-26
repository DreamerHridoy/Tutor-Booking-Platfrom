import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <h2 className="text-4xl font-semibold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for does not exist. <br />
          It might have been moved or deleted.
        </p>
        <button
          onClick={handleGoHome}
          className="btn btn-primary mt-6 px-6 py-2 text-lg font-medium text-white rounded-md"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
