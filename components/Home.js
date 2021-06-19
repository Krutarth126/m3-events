import React, { useEffect } from "react";
import aos from "aos";

function Body() {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <>
      <div className="home__container">
        <h1
          id="heading"
          data-aos-offset="200"
          data-aos="slide-right"
          data-aos-duration="2000"
        >
          M3 EVENTS
        </h1>
        <div
          data-aos-offset="200"
          data-aos="fade slide-up"
          data-aos-duration="4000"
          className="body"
        >
          <h1>Event Planning Is Hard</h1>
          <h1>We Can Help You</h1>
        </div>
        <h2>Give us chance to serve you 😊💕</h2>
      </div>
    </>
  );
}

export default Body;
