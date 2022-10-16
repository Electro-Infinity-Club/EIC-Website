import React from "react";
import { FiInstagram, FiMail, FiLinkedin } from "react-icons/fi";
import "./teamMemberCard.css";

const TeamMembers = ({
  id,
  fname,
  lname,
  post,
  image,
  bio,
  instagram,
  linkedin,
  email,
}) => {
  return (
    <>
      <div className={"relative new-team-card-main " + (id === 0 ? "md:col-start-2" : (id === 0? "col-start-1" : ""))}>

        <div className="rounded overflow-hidden shadow-md bg-club-50 new-team-card">
          <div className="absolute -mt-20 w-full flex justify-center">
            <div className="h-36 w-36">
              <img
                src={image}
                alt="team member"
                className="member-image rounded-full object-cover object-top h-full w-full"
              />
            </div>
          </div>
          <div className="px-2 mt-16 mx-2 flex flex-col items-center text-center gap-2">
            <div className="font-bold text-3xl text-club-900">
              <h1>{fname}</h1>
              <h1>{lname}</h1>
            </div>
            <p className="text-club-800 text-lg italic">{post}</p>
            <p className="text-club-700 text-base font-normal">{bio}</p>
            <div className="w-full flex justify-center gap-6 text-xl absolute inset-x-0 bottom-5">
              <a
                href={"mailto:" + email}
                className="new-team-social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMail />
              </a>
              <a
                href={instagram}
                className="new-team-social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </a>
              <a
                href={linkedin}
                className="new-team-social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>
        </div>
      
    </>
  );
};

export default TeamMembers;