import React from "react";
import home_image from "../../assets/home-image.png";
import lock_image from "../../assets/lock.png";

const Default = () => {
  return (
    <>
      <div className="notes">
        <div className="home-image">
          <img src={home_image} alt="home_image" />
        </div>
        <h1>Pocket Notes</h1>
        <p>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
        <div className="lock">
          <img src={lock_image} alt="lock-image" />
          <span>end-to-end encrypted</span>
        </div>
      </div>
    </>
  );
};

export default Default;
