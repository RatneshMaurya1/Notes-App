import "./home.css";
import home_image from "../../assets/home-image.png";
import lock_image from "../../assets/lock.png";
import plus_image from "../../assets/plus.png";
import { useState } from "react";
import Modal from "../MOdal/Modal";

const Main = () => {
  const [showModal, setShowModal] = useState(false);

    const closeModel = () => setShowModal(false);

  return (
    <>
      <div className="container" >
        <div className="notes-group">
          <h1>Pocket Notes</h1>
        </div>

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
        <div className="add" onClick={() => setShowModal(true)}>
          <img src={plus_image} alt="" />
        </div>
        
      {showModal && (
        <>
          <div className="overlay" onClick={() => setShowModal(false)}></div>
        <div className="modal" >
          <Modal />
        </div>
        </>
      )}
      </div>
    </>
  );
};

export default Main;
