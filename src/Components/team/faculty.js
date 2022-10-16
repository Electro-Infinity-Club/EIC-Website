import React from "react";
import "./faculty.css";

// Images
import TiwariMam from "../../assets/faculty/tiwari-mam.webp";
import YogitaMam from "../../assets/faculty/yogita-mam.webp";

const Faculty = () => {
  return (
    <>
      <section className="container mb-12 mx-auto">
        <div className="faculty-container">
          <div className="faculty-card">
            <div className="faculty-image-container">
              <img
                className="faculty-image"
                src={TiwariMam}
                alt="professor"
              />
            </div>
            <div className="faculty-content">
              <h1 className="faculty-name text-club-900">
                Dr. K.S.Tiwari
              </h1>
              <p className="text-base font-normal text-club-700">
                Dr K.S.Tiwari completed her graduation in 1999 from RKN. 
                She completed her M.Tech and PhD from VNIT Nagpur and has more than 20 years of teaching experience. 
                She is a life member of several reputed bodies like ISTE, IETE, IAENG, RST and has credit to publications in several reputed journals. 
                Her area of expertise is VLSI, Digital Design and Rough set theory.
              </p>
            </div>
          </div>

          <div className="faculty-card">
            <div className="faculty-image-container">
              <img
                className="faculty-image"
                src={YogitaMam}
                alt="professor"
              />
            </div>
            <div className="faculty-content">
              <h1 className="faculty-name text-club-900">
                Prof. Yogita Ajgar
              </h1>
              <p className="text-base font-normal text-club-700 md:py-3 lg:py-0">
                Prof Yogita Ajgar completed her graduation in 2001 from Pune University and M.E. from PICT college, Pune. 
                She is pursuing her PhD in the field of Machine learning and has more than 15 years of teaching experience. 
                She is a life member of several reputed bodies like ISTE, IETE.
                Her area of expertise is Microwave and Communication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faculty;
