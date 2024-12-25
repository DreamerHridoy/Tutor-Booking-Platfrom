import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "32,000+", label: "Experienced tutors" },
    { value: "300,000+", label: "5-star tutor reviews" },
    { value: "120+", label: "Subjects taught" },
    { value: "180+", label: "Tutor nationalities" },
    { value: "4.8 ★", label: "on the App Store" },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-4xl font-extrabold text-primary">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
