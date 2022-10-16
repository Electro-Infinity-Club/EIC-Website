import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import AboutClub from "../Components/AboutClub/AboutClub";
import Faq from "../Components/FAQ/FaqSection";
import Events from "./Events";
import Register from "../Components/Register/Register";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="subHeroSection">
        <AboutClub />
        <Events />
        <Register />
        <Faq />
      </div>
    </>
  );
};

export default Home;