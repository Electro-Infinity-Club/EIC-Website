import React from "react";
import {FaGithub, FaLinkedinIn, FaInstagram, FaYoutube} from "react-icons/fa";

const FooterSectionA = () => {
  return (
    <>
    <div className="text-xl font-semibold text-white py-6 text-center">
      Follow us on our Social Media Platforms
    </div>

    <div className="footer-social-div text-black font-semibold flex justify-center gap-6 md:gap-8">
      <div className="flex flex-col gap-1 items-center w-16 h-12 text-white ">   
        <a href="https://github.com/Electro-Infinity-Club" 
          target="_blank" rel="noopener noreferrer" 
          className="social border border-box p-1 text-lg"><FaGithub /></a> 
        <p>Github</p>
      </div>

      <div className="flex flex-col gap-1 items-center w-16 h-12 text-white ">   
        <a href="https://www.linkedin.com/company/electro-infinity-club" 
          target="_blank" rel="noopener noreferrer" 
          className="social border border-box p-1 text-lg"><FaLinkedinIn /></a> 
        <p>LinkedIn</p>
      </div>
      
      <div className="flex flex-col gap-1 items-center w-16 h-12 text-white">   
        <a href="https://instagram.com/mescoe_eic?utm_medium=copy_link" 
          target="_blank" rel="noopener noreferrer"   
          className="social border border-box p-1 text-lg"><FaInstagram /></a> 
        <p>Instagram</p>
      </div>
      
      <div className="flex flex-col gap-1 items-center w-16 h-12 text-white">   
        <a href="https://www.youtube.com/channel/UCbl0PVgQHtLh1iLpronm8tg/featured" 
          target="_blank" rel="noopener noreferrer" 
          className="social border border-rounded p-1 text-lg"><FaYoutube /></a>
        <p>Youtube</p> 
      </div>
    </div>

    <div className="w-full border-b pb-6 border-gray-200" aria-hidden="true"></div>
    </>
  );
};

export default FooterSectionA;
