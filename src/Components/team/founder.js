import React from "react";
import "./founder.css";
// Images
import Arnav from "../../assets/team-cores/arnav_founder.webp";
const Founder = () => {
  return (
    <>
      <section className="container mb-12 mx-auto">
        <div className="founder-container">
          <div className="founder-card">
            <div className="founder-image-container">
              <img
                className="founder-image"
                src={Arnav}
                alt="founder"
              />
            </div>
            <div className="founder-content">
              <h1 className="founder-name text-club-900">
                Arnav Botre
              </h1>
              <p className="text-base font-normal text-club-700">
                I am a final year student of ENTC department and a enthusiast in electronics domain.
                I have keen interest in knowing the technological advancements taking place in the world.
                My main motto behind starting this club was to motivate students in this field and build a better tomorrow together.
                In my free time I love hiking and play different types of sports.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Founder;
