// import { Link, NavLink } from "react-router-dom";
// import Logo from "../../assets/Booking-logo.png"; // Importing the logo directly
// import Avatar from "../../assets/avatar.png"; // Importing the default avatar image
// import { useContext } from "react";
// import AuthContext from "../../context/AuthContext/AuthContext";

// const NavBar = () => {
//   const { user, signOutUser } = useContext(AuthContext);

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
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Booking-logo.png"; // Importing the logo directly
import Avatar from "../../assets/avatar.png"; // Importing the default avatar image
import AuthContext from "../../context/AuthContext/AuthContext";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  // Check for theme in localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme); // Apply the saved theme
    } else {
      setTheme("light");
    }
  }, []);

  // Toggle the theme
  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme); // Persist theme in localStorage
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

  const links = (
    <>
      <li>
        <NavLink className="m-2" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="m-2" to="/findTutor">
          Find tutors
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
          My booked tutors
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-12" src={Logo} alt="Booking Logo" />
          <h3 className="text-3xl">Online Tutor</h3>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex items-center space-x-4">
        {user ? (
          <>
            <div className="flex items-center space-x-2 relative group">
              <img
                src={user?.profilePicture || Avatar} // Fallback to Avatar if user doesn't have a profile picture
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
          </>
        ) : (
          <>
            <Link to="register">
              <button className="btn m-4">Register</button>
            </Link>
            <Link to="signIn">
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
  );
};

export default NavBar;
