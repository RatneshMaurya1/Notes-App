import "./home.css";
import plus_image from "../../assets/plus.png";
import { useEffect, useState } from "react";
import Notes from "../Notes/Notes";
import Default from "../default/Default";
// import Modal from "../Modal/Modal";

const Home = () => {
  const [group, setGroup] = useState(
    JSON.parse(localStorage.getItem("group")) || []
  );
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [color, setColor] = useState("");
  const [showNotes, setShowNotes] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [showGroup, setShowGroup] = useState(true);

  function upperCase(groupName) {
    const name = groupName.trim().split(" ");
    if (name.length > 1) {
      return name[0][0].toUpperCase() + name[1][0].toUpperCase();
    }
    console.log(name);
    if (name.length === 1) {
      return name[0][0].toUpperCase();
    }
  }
  function capitalFirstLetter(str) {
    return str
      .trim()
      .split()
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  const capitalLetter = capitalFirstLetter(groupName);

  function createGroup() {
    if (!groupName || !color) {
      return alert("GroupName and Color required");
    }

    const addItem = {
      name: capitalLetter,
      color: color,
      upperCase: upperCase(groupName),
      notes: [],
    };
    setGroup([...group, addItem]);

    setGroupName("");
    setColor("");
    setShowModal(false);
  }
  const handelGroup = (group) => {
    setSelectedClass(group);
    setShowNotes(true);
    if (window.innerWidth <= 650) {
      setShowGroup(false);
      setShowNotes(true);
    }
  };
  const backGroup = () => {
    if (window.innerWidth <= 650) {
      setShowGroup(true);
      setShowNotes(false);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        if (showNotes) {
          setShowGroup(false);
        } else {
          setShowGroup(true);
        }
      } else if(selectedClass) {
        setShowGroup(true); 
        setShowNotes(true); 
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [showNotes, showGroup,selectedClass]);

  useEffect(() => {
    localStorage.setItem("group", JSON.stringify(group));
  }, [group]);
  return (
    <>
      <div className="container">
        {showGroup && (
          <div className="notes-group">
            <h1>Pocket Notes</h1>
            <div className="scroll">
              {group.map((group) => (
                <div
                  className={`group  ${
                    selectedClass === group ? "selected " : ""
                  }`}
                  key={group.name}
                  onClick={() => handelGroup(group)}
                >
                  <div
                    className="group-icon"
                    style={{ backgroundColor: group.color }}
                  >
                    <p>{group.upperCase}</p>
                  </div>
                  <div className="group-name">
                    <p>{group.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showNotes ? (
          <Notes
            group={selectedClass}
            setGroup={setGroup}
            backGroup={backGroup}
          />
        ) : (
          <Default />
        )}

        {showGroup && (
          <div className="add" onClick={() => setShowModal(true)}>
            <img src={plus_image} alt="" />
          </div>
        )}
{/* 
        {showModal && (
          <>
            <div className="overlay" onClick={() => setShowModal(false)}></div>
            <div className="modal">
              <Modal
                groupName={groupName}
                setGroupName={setGroupName}
                setColor={setColor}
                createGroup={createGroup}
              />
            </div>
          </>
        )} */}
      </div>
    </>
  );
};

export default Home;
