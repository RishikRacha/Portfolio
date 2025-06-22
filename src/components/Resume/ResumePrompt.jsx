import React from "react";
import "./ResumePrompt.css";
import link from "../../assets/link.png";
import plus from "../../assets/plus.png";

function ResumePrompt({promptStatus, handleClose}) {
    if(!promptStatus) return null;
    return (
        <div className="promptContainer">
            <div className="promptCloserDiv">
                <img src={plus} alt="" className="promptCloser" onClick={handleClose}/>
            </div>
            <div>
                <h3 className="promptText" >
                    Thank you for the (honest?) feedback
                </h3>
                <h3 className="promptText">
                    {" "}
                    Maybe consider checking out my resume and get in touch? Cheers!
                </h3>
            </div>
            <a href="" className="resumePrompt ">
                <img src={link} alt="" className="linkImage" />
                <span>Resume</span>
            </a>
        </div>
    );
}

export default ResumePrompt;
