// import { useContext, useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import Logo from "../../assets/Booking-logo.png"; // Importing the logo directly
// import Avatar from "../../assets/avatar.png"; // Importing the default avatar image
// import AuthContext from "../../context/AuthContext/AuthContext";

// const NavBar = () => {
//   const { user, signOutUser } = useContext(AuthContext);
//   const [theme, setTheme] = useState("light");

//   // Check for theme in localStorage on mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       setTheme(savedTheme);
//       document.documentElement.classList.add(savedTheme); // Apply the saved theme
//     } else {
//       setTheme("light");
//     }
//   }, []);

//   // Toggle the theme
//   const handleThemeToggle = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.documentElement.classList.remove(theme);
//     document.documentElement.classList.add(newTheme);
//     localStorage.setItem("theme", newTheme); // Persist theme in localStorage
//   };

//   const handleSignOut = () => {
//     signOutUser()
//       .then(() => {
//         console.log("Successful sign out");
//       })
//       .catch((error) => {
//         console.log("Failed to sign out", error);
//       });
//   };

//   const links = (
//     <>
//       <li>
//         <NavLink className="m-2" to="/">
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink className="m-2" to="/findTutor">
//           Find tutors
//         </NavLink>
//       </li>
//       <li>
//         <NavLink className="m-2" to="/addTutorials">
//           Add Tutorials
//         </NavLink>
//       </li>
//       <li>
//         <NavLink className="m-2" to="/myTutorials">
//           My Tutorials
//         </NavLink>
//       </li>
//       <li>
//         <NavLink className="m-2" to="/myBookTutor">
//           My booked tutors
//         </NavLink>
//       </li>
//     </>
//   );

//   return (
//     <div className="navbar bg-base-100">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             {links}
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl">
//           <img className="w-12" src={Logo} alt="Booking Logo" />
//           <h3 className="text-3xl">Online Tutor</h3>
//         </a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>
//       <div className="navbar-end flex items-center space-x-4">
//         {user ? (
//           <>
//             <div className="flex items-center space-x-2 relative group">
//               <img
//                 src={user?.profilePicture || Avatar} // Fallback to Avatar if user doesn't have a profile picture
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full"
//               />
//               <span className="absolute left-0 mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 {user.displayName}
//               </span>

//               <button onClick={handleSignOut} className="btn text-xl">
//                 LogOut
//               </button>
//             </div>
//           </>
//         ) : (
//           <>
//             <Link to="register">
//               <button className="btn m-4">Register</button>
//             </Link>
//             <Link to="signIn">
//               <button className="btn m-4">SignIn</button>
//             </Link>
//           </>
//         )}
//         <button
//           onClick={handleThemeToggle}
//           className="btn btn-ghost m-4"
//           title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
//         >
//           {theme === "light" ? (
//             <span role="img" aria-label="moon">
//               🌙
//             </span>
//           ) : (
//             <span role="img" aria-label="sun">
//               ☀️
//             </span>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Booking-logo.png";
import Avatar from "../../assets/avatar.png";
import AuthContext from "../../context/AuthContext/AuthContext";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  // Check for theme in localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  // Toggle the theme
  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Successful sign out");
      })
      .catch((error) => {
        console.log("Failed to sign out", error);
      });
  };

  const loggedInLinks = (
    <>
      <li>
        <NavLink className="m-2" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="m-2" to="/findTutor">
          Find Tutors
        </NavLink>
      </li>
      <li>
        <NavLink className="m-2" to="/addTutorials">
          Add Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink className="m-2" to="/myTutorials">
          My Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink className="m-2" to="/myBookTutor">
          My Booked Tutors
        </NavLink>
      </li>
    </>
  );

  const loggedOutLinks = (
    <>
      <li>
        <NavLink className="m-2" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="m-2" to="/findTutor">
          Find Tutors
        </NavLink>
      </li>
      <li>
        <NavLink className="m-2" to="/about">
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-primary text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-primary text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {user ? loggedInLinks : loggedOutLinks}
            </ul>
          </div>
          <Link to="/" className="flex items-center space-x-2">
            <img className="w-12" src={Logo} alt="Booking Logo" />
            <h3 className="text-3xl">Online Tutor</h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {user ? loggedInLinks : loggedOutLinks}
          </ul>
        </div>
        <div className="navbar-end flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-2 relative group">
              <img
                src={user?.profilePicture || Avatar}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="absolute left-0 mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {user.displayName}
              </span>
              <button onClick={handleSignOut} className="btn text-xl">
                LogOut
              </button>
            </div>
          ) : (
            <>
              <Link to="/register">
                <button className="btn m-4">Register</button>
              </Link>
              <Link to="/signIn">
                <button className="btn m-4">SignIn</button>
              </Link>
            </>
          )}
          <button
            onClick={handleThemeToggle}
            className="btn btn-ghost m-4"
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <span role="img" aria-label="moon">
                🌙
              </span>
            ) : (
              <span role="img" aria-label="sun">
                ☀️
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

// import { useContext, useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import Logo from "../../assets/Booking-logo.png";
// import Avatar from "../../assets/avatar.png";
// import AuthContext from "../../context/AuthContext/AuthContext";

// const NavBar = () => {
//   const { user, signOutUser } = useContext(AuthContext);
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setTheme(savedTheme);
//     document.documentElement.classList.add(savedTheme);
//   }, []);

//   const handleThemeToggle = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.documentElement.classList.replace(theme, newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   const handleSignOut = () => {
//     signOutUser()
//       .then(() => console.log("Signed out successfully"))
//       .catch((error) => console.log("Sign-out failed", error));
//   };

//   return (
//     <nav className="bg-blue-600 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img className="w-12 mr-3" src={Logo} alt="Logo" />
//           <h3 className="text-2xl font-semibold">Online Tutor</h3>
//         </div>

//         {/* Links */}
//         <ul className="hidden md:flex space-x-6">
//           <li>
//             <NavLink to="/" className="hover:underline">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/findTutor" className="hover:underline">
//               Find Tutors
//             </NavLink>
//           </li>
//           {user && (
//             <>
//               <li>
//                 <NavLink to="/addTutorials" className="hover:underline">
//                   Add Tutorials
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/myTutorials" className="hover:underline">
//                   My Tutorials
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/myBookTutor" className="hover:underline">
//                   My Booked Tutors
//                 </NavLink>
//               </li>
//             </>
//           )}
//         </ul>

//         {/* User Section */}
//         <div className="flex items-center space-x-4">
//           {user ? (
//             <div className="relative group">
//               <img
//                 src={user?.profilePicture || Avatar}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full cursor-pointer"
//               />
//               <span className="absolute left-0 mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white p-2 rounded">
//                 {user.displayName}
//               </span>
//               <button
//                 onClick={handleSignOut}
//                 className="ml-3 px-4 py-2 bg-red-500 rounded hover:bg-red-600"
//               >
//                 Log Out
//               </button>
//             </div>
//           ) : (
//             <>
//               <Link to="/register">
//                 <button className="px-4 py-2 bg-green-500 rounded hover:bg-green-600">
//                   Register
//                 </button>
//               </Link>
//               <Link to="/signIn">
//                 <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
//                   Sign In
//                 </button>
//               </Link>
//             </>
//           )}

//           {/* Theme Toggle */}
//           <button onClick={handleThemeToggle} className="p-2 text-xl">
//             {theme === "light" ? "🌙" : "☀️"}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
