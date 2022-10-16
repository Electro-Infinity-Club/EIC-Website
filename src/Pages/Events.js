import React from "react";
import eventData from "../helper/eventApi.json";
import EventCard from "../Components/Event/EventCard";

const Events = () => {
  return (
    <>
      <div className="w-full mt-20 px-3 pt-3">
        <div className="container mx-auto">
          <>
            <div className="w-full">
              {eventData.length === 0 ? (
                <h1 className="xl:text-4xl text-3xl text-center text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                  No Events Found!
                </h1>
              ) : (
                <>
                  <h1 className="xl:text-4xl text-3xl text-center text-white font-extrabold pb-5 sm:w-4/6 w-5/6 mx-auto">
                    Upcoming Events!
                  </h1>
                  <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    {Object.keys(eventData).map(category => {
                      if (category === "upcoming") {
                        return eventData[category].map(eventObj => {
                          return (
                            <EventCard
                              key={eventObj.id}
                              event={eventObj}
                            />
                          );
                        });
                      }
                      return null;
                    })}
                  </div>
                </>
              )}
            </div>
          </>
        </div>
      </div>
      <div className="w-full mt-20 px-3 pt-3 ">
        <div className="container mx-auto">
          <>
            <div className="w-full">
              {eventData.length === 0 ? (
                <h1 className="xl:text-4xl text-3xl text-center text-white font-extrabold pb-5 sm:w-4/6 w-5/6 mx-auto">
                  No Events Found!
                </h1>
              ) : (
                <>
                  <h1 className="xl:text-4xl text-3xl text-center text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                    Past Events!
                  </h1>
                  <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
                    {Object.keys(eventData).map(category => {
                      if (category === "past") {
                        return eventData[category].map(eventObj => {
                          return (
                            <EventCard
                              key={eventObj.id}
                              event={eventObj}
                            />
                          );
                        });
                      }
                      return null;
                    })}
                  </div>
                </>
              )}
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Events;
