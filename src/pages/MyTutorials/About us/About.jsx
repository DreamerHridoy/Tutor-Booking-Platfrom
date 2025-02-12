import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-4 text-center">
        About Tutor Booking Platform
      </h1>
      <p className="text-lg mb-4">
        Welcome to{" "}
        <span className="font-semibold text-blue-500">
          Tutor Booking Platform
        </span>
        , your trusted solution for finding the best tutors tailored to your
        learning needs. Our platform connects students with experienced tutors
        across various subjects, ensuring personalized and effective learning
        experiences.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
      <p className="text-lg mb-4">
        Our mission is to make quality education accessible to everyone by
        bridging the gap between students and qualified tutors. We believe in
        fostering an environment of continuous learning and academic excellence.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Why Choose Us?</h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Wide range of subjects and expert tutors</li>
        <li>Flexible scheduling to fit your timetable</li>
        <li>Secure and easy booking process</li>
        <li>Personalized learning experiences</li>
        <li>Trusted by thousands of students and parents</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="text-lg mb-4">
        Have questions or need support? Feel free to reach out to us at{" "}
        <a
          href="mailto:support@tutorbooking.com"
          className="text-blue-500 underline"
        >
          support@tutorbooking.com
        </a>
        .
      </p>
      <p className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Tutor Booking Platform. All rights
        reserved.
      </p>
    </div>
  );
};

export default About;
