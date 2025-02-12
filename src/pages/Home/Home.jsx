import React from "react";
import Banner from "./Banner";
import Stats from "./Stats";
import LanguageCategories from "./LanguageCategories";
import AvailableTutors from "./AvailableTutors";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <LanguageCategories></LanguageCategories>
      <AvailableTutors></AvailableTutors>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
