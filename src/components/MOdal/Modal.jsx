import { useState } from "react"
import "./modal.css"

const Modal = ({groupName,setGroupName,setColor,createGroup}) =>{
    const [input, setInput] = useState("")

    return(
        <div className="modal-container" >
            <p>Create New group</p>
            <div className="input">
                <h2>Group Name</h2>
                <input type="text" placeholder="Enter group name" value={groupName} onChange={(e) => setGroupName(e.target.value)}/>
            </div>
            <div className="choose-color">
                <p>Choose colour</p>

                <div className="color">
                    <div className="color-1" onClick={() => setColor("#B38BFA")}></div>
                    <div className="color-2" onClick={() => setColor("#FF79F2")}></div>
                    <div className="color-3" onClick={() => setColor("#43E6FC")}></div>
                    <div className="color-4" onClick={() => setColor("#F19576")}></div>
                    <div className="color-5" onClick={() => setColor("#0047FF")}></div>
                    <div className="color-6" onClick={() => setColor("#6691FF")}></div>
                </div>
            </div>
            <div className="create-btn">
                <button onClick={createGroup}>Create</button>
            </div>
        </div>
    )
}

export default Modal