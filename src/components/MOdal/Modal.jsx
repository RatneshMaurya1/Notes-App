import "./modal.css"

const Modal = () =>{

    return(
        <div className="modal-container" >
            <p>Create New group</p>
            <div className="input">
                <h2>Group Name</h2>
                <input type="text" placeholder="Enter group name" />
            </div>
            <div className="choose-color">
                <p>Choose colour</p>

                <div className="color">
                    <div className="color-1"></div>
                    <div className="color-2"></div>
                    <div className="color-3"></div>
                    <div className="color-4"></div>
                    <div className="color-5"></div>
                    <div className="color-6"></div>
                </div>
            </div>
            <div className="create-btn">
                <button>Create</button>
            </div>
        </div>
    )
}

export default Modal