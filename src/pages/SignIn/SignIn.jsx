import Lottie from "lottie-react";
import SignInLottie from "../../assets/lottie/login.json";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2"; // Import SweetAlert2
import { useNavigate } from "react-router-dom"; // Import useNavigate to redirect

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate(); // Hook to navigate to the home page

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        // Show success alert with SweetAlert2
        Swal.fire({
          title: "Sign In Successful!",
          text: "You have signed in successfully.",
          icon: "success",
          confirmButtonText: "Go to Home",
        }).then(() => {
          navigate("/"); // Redirect to home page after success
        });
      })
      .catch((error) => {
        console.log(error.message);
        // Optionally show an error alert here
        Swal.fire({
          title: "Sign In Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={SignInLottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-5xl font-bold">Sign In Now!</h1>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-10 text-gray-500 focus:outline-none"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
          <SocialLogin></SocialLogin>

          {/* Registration Button */}
          <div className="mt-4 text-center">
            <p>Don't have an account?</p>
            <button
              onClick={() => navigate("/register")} // Navigates to the registration page
              className="btn btn-link text-blue-500"
            >
              Register Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
