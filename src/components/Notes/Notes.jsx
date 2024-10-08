import "./notes.css";
import Enter_btn from "../../assets/Enter-btn.png";
import blue_Enter_btn from "../../assets/blue_enter_btn.png";
import back_btn from "../../assets/arrow.png";
import { useState, useEffect } from "react";


const Notes = ({ group, setGroup,backGroup }) => {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState(group.notes || []);

  useEffect(() => {
    setNotes(group.notes || []);
  }, [group]);

  function addText() {
    if (text.trim() === "") return;

    const getDateandTime = new Date();
    const getDate = getDateandTime.toLocaleDateString();
    const getTime = getDateandTime.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});

    const newNote = {
      text: text,
      notesTime: getTime,
      notesDate: getDate,
    };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);

    const updatedGroup = {
      ...group,
      notes: updatedNotes,
    };

    setGroup((prevGroups) =>
      prevGroups.map((g) => (g.name === group.name ? updatedGroup : g))
    );

    setText("");
  }

  return (
    <div className="notes-container">
      <header className="header">
        <div className="back-btn" onClick={backGroup}>
      <img  src={back_btn} alt="back-btn" />
        </div>
        <div className="header-icon" style={{ backgroundColor: group.color }}>
          <p>{group.upperCase}</p>
        </div>
        <div className="header-name">
          <p>{group.name}</p>
        </div>
      </header>
      <main className="notes-main">
        <div className="notes-scroll">
          {notes.length > 0 &&
            notes.map((note, index) => (
              <div className="notes-section" key={index}>
                <p>{note.text}</p>
                <div className="notes-date-time">
                  <div className="date">
                    <p>{note.notesDate}</p>
                  </div>
                  <div className="dot"></div>
                  <div className="time">
                    <p>{note.notesTime}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
      <footer className="footer">
        <textarea
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button className={`footer-btn }`} onClick={addText}>
          {!text ? (
            <img className="footer-img" src={Enter_btn} alt="enter_btn" />
          ) : (
            <img className="footer-img1" src={blue_Enter_btn} alt="enter_btn" />
          )}
        </button>
      </footer>
    </div>
  );
};

export default Notes;
