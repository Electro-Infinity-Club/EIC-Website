import React from "react";
import "../../Pages/Events.css";

const EventCard = props => {
  const { event } = props;

  return (
    <>
      {event.id === 0 ? (
        <h1 className="text-club-100 text-3xl italic text-center">
          Something's cooking... Stay tuned
        </h1>) : (
        <>
          <section className="event-card-section">
            <div className="event-card-div">
              <div className="event-card">
                <div className="w-full">
                  <img
                    src={event.img}
                    alt="event"
                    className="event-image"
                  />
                </div>
                <div className="event-title">
                  <h1>{event.title}</h1>
                </div>
                <p className="event-date">{event.date}</p>
                <p className="event-info">{event.info}</p>
                <a 
                  href={event.link} target="_blank" rel="noopener noreferrer"
                  className={"event-reg-button " + (event.open ? "flex" : "hidden")}>
                  <span>Register</span>
                </a>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default EventCard;
