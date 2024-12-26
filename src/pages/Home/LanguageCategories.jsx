// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const LanguageCategories = () => {
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/categories")
//       .then((res) => res.json())
//       .then((data) => {
//         setCategories(data);
//       });
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
//       {categories.map((category) => (
//         <Link to={`/findTutor/${category.language}`}>
//           <div
//             key={category.id}
//             className="card bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition duration-300 flex items-center justify-between"
//           >
//             <div className="flex items-center">
//               <span className="text-3xl mr-4">{category.logo}</span>
//               <div>
//                 <h2 className="font-bold text-lg">{category.title}</h2>
//                 <p className="text-gray-500 text-sm">{category.count}</p>
//               </div>
//             </div>
//             <div className="text-xl text-gray-600">{">"}</div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default LanguageCategories;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LanguageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Search term state

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  // Filter categories based on the search term
  const filteredCategories = categories.filter((category) =>
    category.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto mt-8">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by Language"
        className="p-2 border rounded w-full mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Handle search input change
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <Link key={category._id} to={`/findTutor/${category.language}`}>
            <div className="card bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition duration-300 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-3xl mr-4">{category.logo}</span>
                <div>
                  <h2 className="font-bold text-lg">{category.language}</h2>
                  <p className="text-gray-500 text-sm">{category.count}</p>
                </div>
              </div>
              <div className="text-xl text-gray-600">{">"}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageCategories;
