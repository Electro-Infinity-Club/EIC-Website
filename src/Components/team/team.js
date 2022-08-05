import React, { useState } from "react";
import TeamMembers from "./teamMemberCard";
import { TeamData } from "./teamData";
import Faculty from "./faculty.js";
import Founder from "./founder.js";

const TeamContainer = () => {
  const [data] = useState(TeamData);

  return (
    <>
      <section className="container team-section-main">
        <div className="container mx-auto pt-20 md:pt-32 lg:pt-28 pb-12">
          <h1 className="text-white text-3xl text-center">
            OUR FACULTY
          </h1>
        </div>
        <Faculty />
   
       <div className="container mx-auto pt-20 pb-6 lg:pr-6">
          <h1 className="text-white text-3xl text-center">
            FOUNDER
          </h1>
        </div>
       <Founder />
    
      /* <div className="container mx-auto pt-20 pb-6 lg:pr-6">
          <h1 className="text-white text-3xl text-center">
            MEET OUR 2021-23 TEAM
          </h1>
        </div>

      /*  {/* <TeamMember /> */}
        /*<div className="w-full mt-10 px-3 pt-3 ">
          <div className="container mx-auto">
            <div className="team-section">
              {data.map(info => (
                <TeamMembers key={info.id} {...info} />
             
             
             ))}
            </div>
          </div>
        </div>*/
      </section>
    </>
  );
};

export default TeamContainer;
