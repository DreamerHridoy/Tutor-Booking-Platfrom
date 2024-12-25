import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import AvailableTutorCard from "./Home/AvailableTutorCard";

const MyBookTutor = () => {
  const { user } = useContext(AuthContext);
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookTutors/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
        console.log(data);
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

export default MyBookTutor;
