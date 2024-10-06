import "./notes.css";
import Enter_btn from "../../assets/Enter-btn.png";
import { useState } from "react";

const Notes = ({ group }) => {
  const [textGroup, setTextGroup] = useState([]);
  const [text, setText] = useState("");

  function addText() {

    const getDateandTime = new Date();
    const getDate = getDateandTime.toLocaleDateString();
    const getTime = getDateandTime.toLocaleTimeString()

    const addItem = {
      text:text,
      notesTime:getTime,
      notesDate:getDate

    }
    setTextGroup([...textGroup, addItem]);
    setText("");
  }

  return (
    <>
      <div className="notes-container">
        <header className="header">
          <div className="header-icon" style={{ backgroundColor: group.color }}>
            <p>{group.upperCase}</p>
          </div>
          <div className="header-name">
            <p>{group.name}</p>
          </div>
        </header>
        <main className="notes-main">
          <div className="notes-scroll">
            {textGroup.map((group, index) => (
              <div className="notes-section" key={index}>
                <p>{group.text}</p>
                <div className="notes-date-time">
                  <div className="date">
                    <p>{group.notesDate}</p>
                  </div>
                  <div className="dot"></div>
                  <div className="time">
                    <p>{group.notesTime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <footer className="footer">
          <textarea
            placeholder="Enter your text here..........."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button className={`footer-btn`} onClick={addText}>
            <img src={Enter_btn} alt="enter_btn" />
          </button>
        </footer>
      </div>
    </>
  );
};

export default Notes;
