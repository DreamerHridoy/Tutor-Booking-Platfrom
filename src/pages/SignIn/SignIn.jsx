import Lottie from "lottie-react";
import SignInLottie from "../../assets/lottie/login.json";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Sign In Successful!",
          text: "You have signed in successfully.",
          icon: "success",
          confirmButtonText: "Go to Details Page",
        }).then(() => {
          navigate(from);
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Sign In Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse lg:flex-row items-center w-full max-w-6xl mx-auto gap-8">
        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Lottie animationData={SignInLottie} className="w-full max-w-md" />
        </div>

        {/* Sign In Form */}
        <div className="w-full max-w-md bg-base-100 p-8 rounded-2xl shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Sign In Now!
          </h1>

          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="mb-4 relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-10 text-gray-500"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Sign In
              </button>
            </div>
          </form>

          {/* Social Login */}
          <div className="mt-4">
            <SocialLogin />
          </div>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-sm">Don&apos;t have an account?</p>
            <button
              onClick={() => navigate("/register")}
              className="btn btn-link text-blue-600 font-semibold"
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
