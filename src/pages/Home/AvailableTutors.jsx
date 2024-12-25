import { useEffect, useState } from "react";
import AvailableTutorCard from "./AvailableTutorCard";

const AvailableTutors = () => {
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tutors")
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
      });
  }, []);
  return (
    <div>
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
