import userProfile from "../assets/user-profile.png";
import robotProfile from "../assets/robot.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ChatMessage.css"

export function ChatMessage({message, sender, loadingStatus}){            
    return(
        <div className={sender === "robot"? "chat-robot-container": "chat-user-container"}>
            {sender === "robot" && (
                <img className="robot-image" src={robotProfile}/>
            )}
            <div className="chat-message">{loadingStatus? 
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                :message}
            </div>
            {sender === "user" && (
                <img className="user-image" src={userProfile}/>
            )}
        </div>
    )
}
