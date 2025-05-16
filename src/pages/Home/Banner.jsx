import { easeOut, motion } from "framer-motion";
import Tutor1 from "../../assets/Tutor/Tutor1.jpg";
import Tutor2 from "../../assets/Tutor/Tutor2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 mt-20 py-10 px-4 lg:px-20">
      <div className="hero-content flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <motion.h1
            animate={{ x: [0, 20, 0] }}
            transition={{
              duration: 3,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Online Tutor Booking Platform
          </motion.h1>

          <p className="text-base md:text-lg text-base-content/80">
            Our platform revolutionizes learning by offering flexibility, expert
            tutors, and 24/7 access. Say goodbye to geographic limits and hello
            to your perfect learning partner—anytime, anywhere.
          </p>

          <button className="btn btn-primary text-lg px-6">Get Started</button>
        </div>

        {/* Right: Animated Images */}
        <div className="w-full lg:w-1/2 flex justify-center gap-6">
          <motion.img
            src={Tutor1}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="w-32 md:w-48 lg:w-56 border-l-4 border-b-4 border-blue-400 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
            alt="Tutor 1"
          />
          <motion.img
            src={Tutor2}
            animate={{ y: [20, 0, 20] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="w-32 md:w-48 lg:w-56 border-l-4 border-b-4 border-blue-400 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
            alt="Tutor 2"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
