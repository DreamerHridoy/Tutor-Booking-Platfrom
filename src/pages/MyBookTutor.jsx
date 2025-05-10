import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import AvailableTutorCard from "./Home/AvailableTutorCard";

const MyBookTutor = () => {
  const { user } = useContext(AuthContext);
  const [tutors, setTutors] = useState([]);

  //   _id, name, image, language, price, review, details

  useEffect(() => {
    fetch(
      `https://tutor-booking-platform-server-side.vercel.app/bookTutors/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
        console.log(data);
      });
  }, [user.email]);
  return (
    <div className="mt-28">
      <h2>MyBook Tutor:{tutors.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tutors.map((tutor) => (
              <tr key={tutor._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={tutor.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{tutor.name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {tutors.map((tutor) => (
          <AvailableTutorCard
            key={tutor._id}
            tutor={tutor}
          ></AvailableTutorCard>
        ))}
      </div> */}
    </div>
  );
};

export default MyBookTutor;
