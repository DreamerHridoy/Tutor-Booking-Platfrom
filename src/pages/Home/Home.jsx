import React from "react";
import Banner from "./Banner";
import Stats from "./Stats";
import LanguageCategories from "./LanguageCategories";
import AvailableTutors from "./AvailableTutors";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <LanguageCategories></LanguageCategories>
      <AvailableTutors></AvailableTutors>
    </div>
  );
};

export default Home;
