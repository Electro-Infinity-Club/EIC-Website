import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const FooterSectionB = () => {
  return (
    <>
      <div className="footer-section-b">
        <div className="footer-club-logo rounded-full w-40 h-40">
          <img src={logo} className="rounded-full" alt="club logo" />
        </div>
        
        <div className="footer-nav">
          <p className="text-lg font-semibold pb-2">Navigate</p>
          <div className="pl-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li >
              <Link to="/team" className="hover:underline">
                Team
              </Link>
            </li>
            <li >
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </div>
        </div>

        <div className="footer-contact">
          <p className="text-lg font-semibold pb-2">Contact Us</p>
          <p>
            Email:{" "}
            <a
              href="mailto:electroinfinity@gmail.com"
              className="hover:underline"
              rel="noopener noreferrer"
            >
              electroinfinity@gmail.com
            </a>
          </p>

          <div className="w-full border-b pb-3" aria-hidden="true"></div>
          <p className="pt-2">Location: M.E.S College of Engineering,Pune</p>
          <div className="w-full border-b pb-3" aria-hidden="true"></div>
        </div>
      </div>
    </>
  );
};

export default FooterSectionB;
