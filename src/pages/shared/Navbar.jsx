import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Booking-logo.png";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);

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
        <NavLink className="m-2" to="/">
          Add Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink className="m-2" to="/">
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
          <img className="w-12" src={Logo} alt="" />
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
                src={user?.profilePicture || "/src/assets/avatar.png"}
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
            <Link to="register"> Register</Link>
            <Link to="signIn">
              <button className="btn m-4">SignIn</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
