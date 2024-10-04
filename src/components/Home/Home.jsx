import "./home.css";
import home_image from "../../assets/home-image.png";
import lock_image from "../../assets/lock.png";
import plus_image from "../../assets/plus.png";
import { useState } from "react";
import Modal from "../MOdal/Modal";

const Main = () => {
  const [group,setGroup] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [groupName,setGroupName] = useState("")
  const [color,setColor] = useState("")

  function upperCase(groupName){
    const name = groupName.trim().split(" ")
    if(name.length > 1){
      return name[0][0].toUpperCase() + name[1][0].toUpperCase()
    }
    console.log(name)
    if(name.length === 1){
      return name[0][0].toUpperCase()
    }    
  }
  function capitalFirstLetter(str){
    return str.trim().split().map(word => word.charAt(0).toUpperCase()+ word.slice(1)).join(" ")
  }
  const capitalLetter = capitalFirstLetter(groupName)
  
function createGroup(){
  if(!groupName || !color){
    return alert("GroupName and Color required")
  }

  const addItem = {
    name:capitalLetter,
    color:color,
    upperCase: upperCase(groupName)
  }
  setGroup([...group,addItem])

  setGroupName("")
  setColor("")
  setShowModal(false)
}

  return (
    <>
      <div className="container" >
        <div className="notes-group">
          <h1>Pocket Notes</h1>
          {
            group.map((group) => (
              <div className="group" key={group.name}>
                <div className="group-icon" style={{backgroundColor:group.color}}>
                     <p>{group.upperCase}</p>
                </div>
                <div className="group-name">
                    <p>{group.name}</p>
                </div>
            </div>
            ))
          }
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
          <Modal 
          groupName = {groupName}
          setGroupName = {setGroupName}
          setColor={setColor}
          createGroup={createGroup}
          />
        </div>
        </>
      )}
      </div>
    </>
  );
};

export default Main;
