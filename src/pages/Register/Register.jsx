import Lottie from "lottie-react";
import RegisterLottieData from "../../assets/lottie/register.json";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must include at least 6 characters, an uppercase letter, and a lowercase letter."
      );
      return;
    }

    createUser(email, password, photoURL)
      .then(() => {
        Swal.fire({
          title: "Registration Successful!",
          text: "You have successfully registered!",
          icon: "success",
          confirmButtonText: "Go to Home",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Registration failed. Please try again.");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 mt-10 px-4 md:px-8">
      <div className="hero-content flex flex-col-reverse lg:flex-row gap-10 items-center w-full max-w-6xl mx-auto">
        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2 max-w-md">
          <Lottie animationData={RegisterLottieData} />
        </div>

        {/* Registration Form */}
        <div className="card bg-base-100 w-full max-w-sm lg:max-w-md shadow-2xl">
          <h1 className="text-3xl font-bold text-center pt-6">Register Now!</h1>
          <form onSubmit={handleRegister} className="card-body space-y-2">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[52px] text-gray-500"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
              <label className="label">
                <span className="label-text-alt">
                  Must be at least 6 characters
                </span>
              </label>
            </div>

            {/* Photo URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Enter Photo URL"
                name="photoURL"
                className="input input-bordered"
              />
            </div>

            {/* Register Button */}
            <div className="form-control mt-4">
              <button className="btn btn-primary w-full">Register</button>
            </div>
          </form>

          {/* Social Login */}
          <div className="px-8 pb-2">
            <SocialLogin />
          </div>

          {/* Sign In Redirect */}
          <div className="text-center pb-4">
            <button
              onClick={() => navigate("/signin")}
              className="btn btn-link"
            >
              Already have an account? Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
