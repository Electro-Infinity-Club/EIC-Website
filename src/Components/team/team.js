import React, { useState } from "react";
import TeamMembers from "./teamMemberCard";
import { TeamData } from "./teamData";
import Faculty from "./faculty.js";
import Founder from "./founder.js";
import { Disclosure, Transition } from "@headlessui/react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { oldTeamData21 } from "./old/oldteam21.js";
import { oldTeamData22 } from "./old/oldteam22.js";
import OldTeamMembers from "./oldteammembercard";
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

        <div className="container mx-auto pt-20 pb-6 lg:pr-6">
          <h1 className="text-white text-3xl text-center">
            MEET OUR 2023-24 TEAM
          </h1>
        </div>

        {/*<TeamMembers />*/}
        <div className="w-full mt-10 px-3 pt-3 ">
          <div className="container mx-auto">
            <div className="new-team-section">
              {data.map(info => (
                <TeamMembers key={info.id} {...info} />
              ))}
            </div>
          </div>
        </div>
        <>
          <div className="container mx-auto pt-20 pb-6 lg:pr-6">
            <h2 className="text-white text-4xl text-center">
              MEET OUR OLD TEAM

            </h2>
          </div>

          
          {/* Old Team Members 2022-23 */}
          {Object.keys(oldTeamData22).map(year => (
            <Disclosure>
              {({ open }) => (
                <>
                  <div className="w-full mx-auto lg:flex lg:items-start lg:gap-3">
                    <Disclosure.Button className={"w-52 pl-3 py-2 flex justify-between items-center rounded mb-3 " +
                      (open ? "bg-club-100" : "bg-club-50")}>
                      <span className="text-club-700 text-xl">
                        2022-23
                      </span>
                      <span className={open ? "text-club-400" : "text-gray-700"}>
                        {open ? (
                          <BiChevronLeft className="text-xl" />
                        ) : (
                          <BiChevronRight className="text-xl" />
                        )}
                      </span>
                    </Disclosure.Button>

                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel>
                        <div className="w-full my-3 lg:mt-10 sm:mt-10">
                          <div className="container mx-auto">
                            <div className="flex flex-wrap gap-2">
                              {oldTeamData22[year].map(oldInfo => (
                                <OldTeamMembers key={oldInfo.id} {...oldInfo} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </div>

                </>

              )}
            </Disclosure>
          ))}
          
          {/* Old Team Members 2021-22*/}
          {Object.keys(oldTeamData21).map(year => (
            <Disclosure>
              {({ open }) => (
                <>
                  <div className="w-full mx-auto lg:flex lg:items-start lg:gap-3">
                    <Disclosure.Button className={"w-52 pl-3 py-2 flex justify-between items-center rounded mb-3 " +
                      (open ? "bg-club-100" : "bg-club-50")}>
                      <span className="text-club-700 text-xl">
                        2021-22
                      </span>
                      <span className={open ? "text-club-400" : "text-gray-700"}>
                        {open ? (
                          <BiChevronLeft className="text-xl" />
                        ) : (
                          <BiChevronRight className="text-xl" />
                        )}
                      </span>
                    </Disclosure.Button>

                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel>
                        <div className="w-full my-3 lg:mt-10 sm:mt-10">
                          <div className="container mx-auto">
                            <div className="flex flex-wrap gap-2">
                              {oldTeamData21[year].map(oldInfo => (
                                <OldTeamMembers key={oldInfo.id} {...oldInfo} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </div>

                </>

              )}
            </Disclosure>
          ))}


        </>
      </section>
    </>
  );
};

export default TeamContainer;