import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Booking-logo.png";
import Avatar from "../../assets/avatar.png";
import AuthContext from "../../context/AuthContext/AuthContext";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

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

  const navLinkClass = "m-2 hover:underline text-base lg:text-lg";

  const loggedInLinks = (
    <>
      <li>
        <NavLink className={navLinkClass} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClass} to="/findTutor">
          Find Tutors
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClass} to="/addTutorials">
          Add Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClass} to="/myTutorials">
          My Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClass} to="/myBookTutor">
          My Booked Tutors
        </NavLink>
      </li>
    </>
  );

  const loggedOutLinks = (
    <>
      <li>
        <NavLink className={navLinkClass} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClass} to="/findTutor">
          Find Tutors
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClass} to="/about">
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-primary text-white dark:text-gray-100 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl w-full mx-auto px-4 flex justify-between items-center">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-gray-800 text-black dark:text-white rounded-box w-52"
            >
              {user ? loggedInLinks : loggedOutLinks}
            </ul>
          </div>
          <Link to="/" className="flex items-center space-x-2">
            <img className="w-10 sm:w-12" src={Logo} alt="Booking Logo" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white dark:text-gray-100">
              Online Tutor
            </h3>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white dark:text-gray-100">
            {user ? loggedInLinks : loggedOutLinks}
          </ul>
        </div>

        <div className="navbar-end flex items-center space-x-2">
          {user ? (
            <div className="flex items-center space-x-3 relative group">
              <img
                src={user?.profilePicture || Avatar}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <span className="absolute top-12 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-base-100 dark:bg-gray-800 text-sm px-2 py-1 rounded shadow text-black dark:text-white">
                {user.displayName}
              </span>
              <button
                onClick={handleSignOut}
                className="btn btn-sm bg-white text-black dark:bg-gray-700 dark:text-white hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/register">
                <button className="btn btn-sm bg-white text-black dark:bg-gray-700 dark:text-white hover:bg-gray-200 m-1">
                  Register
                </button>
              </Link>
              <Link to="/signIn">
                <button className="btn btn-sm bg-white text-black dark:bg-gray-700 dark:text-white hover:bg-gray-200 m-1">
                  Sign In
                </button>
              </Link>
            </>
          )}
          <button
            onClick={handleThemeToggle}
            className="btn btn-sm btn-ghost m-1"
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
