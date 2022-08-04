import React from "react";
import "./founder.css";
// Images
import Arnav from "../../assets/team-cores/arnav.webp";
const Founder = () => {
 return (
 <>
 <section className="container mb-12 mx-auto">
 <div className="founder-container">
 <div className="founder-card">
 <div className="founder-image-container">
 <img
 className="founder-image"
 src={arnav}
 alt="founder"
 />
 </div>
 <div className="founder-content">
 <h1 className="founder-name text-club-900">
 Arnav Botre
 </h1>
 <p className="text-base font-normal text-club-700">
 Arnav is a pre-final year and a diligent and enthusiast 
student in the electronics domain.
 In free time he loves hiking and playing sports.
 </p>
 </div>
 </div> 
 </div>
 </section>
 </>
 );
};
export default Founder;
