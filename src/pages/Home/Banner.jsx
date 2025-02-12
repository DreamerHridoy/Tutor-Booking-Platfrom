import { easeOut, motion } from "framer-motion";
import Tutor1 from "../../assets/Tutor/Tutor1.jpg";
import Tutor2 from "../../assets/Tutor/Tutor2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 mt-12 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={Tutor1}
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm border-l-4 border-b-4 border-blue-400 rounded-t-[40px] rounded-br-[40px]  shadow-2xl"
          />
          <motion.img
            src={Tutor2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm border-l-4 border-b-4 border-blue-400 rounded-t-[40px] rounded-br-[40px]  shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Online Tutor Booking Platform
          </motion.h1>
          <p className="py-6">
            An online tutor booking system revolutionizes the way students
            access education by offering unparalleled convenience and
            flexibility. With this system, learners can schedule tutoring
            sessions at their preferred times, eliminating geographical and time
            constraints. It provides access to a diverse range of qualified
            tutors, allowing students to choose the best match for their
            specific learning needs and goals.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
