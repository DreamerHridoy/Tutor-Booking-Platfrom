import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LanguageCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
      {categories.map((category) => (
        <Link to={`/findTutor/${category.language}`}>
          <div
            key={category.id}
            className="card bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition duration-300 flex items-center justify-between"
          >
            <div className="flex items-center">
              <span className="text-3xl mr-4">{category.logo}</span>
              <div>
                <h2 className="font-bold text-lg">{category.title}</h2>
                <p className="text-gray-500 text-sm">{category.count}</p>
              </div>
            </div>
            <div className="text-xl text-gray-600">{">"}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LanguageCategories;
