import React, { useState } from "react";
import Slider from "react-slick";
import LesserSign from "../../assets/about-club/lesser_sign.svg"
import GreaterSign from "../../assets/about-club/greater_sign.svg";

import { ClubData } from "./ClubData.js";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutClub() {
  const [clubData] = useState(ClubData);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img 
      src={LesserSign} 
      alt="prevArrow"  {...props} 
    />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img      
      src={GreaterSign} 
      alt="nextArrow" {...props} 
    />
  );

  const settings = {
    arrows:true,
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <>
      <div className="hidden about-slider md:block">
        <Slider {...settings} >
          {clubData.map((data) => (        
            <React.Fragment key={data.id}>

              <div className="h-68 p-8"
                style={{ background: "rgb(0, 36, 54, 0.5)" }}>
                <div className="px-12 pt-4 gap-2 flex lg:px-16 lg:pt-6 lg:gap-4">
                  <img 
                    className="py-2 w-60 h-40 items-center lg:w-80 lg:h-60" 
                    src={data.svg} 
                    alt={data.heading} 
                  />
                  <div className="flex flex-col">
                    <h3 className="text-3xl text-white font-semibold mx-auto text-center underline lg:text-5xl">
                      {data.heading}
                    </h3>
                    <p className="text-lg p-2 font-semibold text-center text-club-50 lg:px-6 lg:text-3xl lg:pt-6">
                      {data.content}
                    </p>
                  </div>
                </div>
              </div>
              
            </React.Fragment>
          ))}
        </Slider>
      </div>

      {/* For small Screen */}
      <div className="my-10 about-slider md:hidden lg:invisible">
      <Slider {...settings} >
          {clubData.map((data) => ( 
            <React.Fragment key={data.id}>

              <div className="h-40 "
                style={{ background: "#0f1f3d" }}>
                <div className="pt-4 gap-2 flex lg:px-16 lg:pt-6 lg:gap-4">
                  <img 
                    className="py-3 mt-10 w-20 h-20 items-center lg:w-80 lg:h-60" 
                    src={data.svg} 
                    alt={data.heading} 
                  />
                  <div className="flex flex-col">
                    <h3 className="text-xl text-club-1000 font-semibold mx-auto text-center lg:text-5xl">
                      {data.heading}
                    </h3>
                    <p className="text-xs p-1 font-normal text-left text-club-50 lg:px-6 lg:text-3xl lg:pt-6">
                      {data.content}
                    </p>
                  </div>
                </div>
              </div>
              
            </React.Fragment>
          ))}
        </Slider>
        </div>
    </>  
  );
}
