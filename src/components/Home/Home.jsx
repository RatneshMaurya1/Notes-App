import "./home.css"
import home_image from "../../assets/home-image.png" 
import lock_image from "../../assets/lock.png" 
import plus_image from "../../assets/plus.png" 

const Main = () =>{


    return(
        <>
        <div className="container">
            
            <div className="notes-group">
                <h1>Pocket Notes</h1>
            </div>

            <div className="notes">
                <div className="home-image">
                <img src={home_image} alt="home_image" />
                </div>
                <h1>Pocket Notes</h1>
                <p>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                <div className="lock">
                <img src={lock_image} alt="lock-image" /><span>end-to-end encrypted</span>
                </div>
            </div>
            <div className="add">
                <img src={plus_image} alt="" />
            </div>
        </div>
        </>
    )
}

export default Main