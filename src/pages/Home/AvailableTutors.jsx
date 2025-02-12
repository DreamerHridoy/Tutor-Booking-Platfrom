import { useEffect, useState } from "react";
import AvailableTutorCard from "./AvailableTutorCard";

const AvailableTutors = () => {
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    fetch("https://tutor-booking-platform-server-side.vercel.app/tutors")
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center  text-gray-800 mb-4 mt-4">
        Available Tutors
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {tutors.map((tutor) => (
          <AvailableTutorCard
            key={tutor._id}
            tutor={tutor}
          ></AvailableTutorCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableTutors;
