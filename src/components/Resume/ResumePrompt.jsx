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
            <a href="https://drive.google.com/file/d/182z8aV2JoByVJPGYE8U9kcPZ9ik2UZ_L/view?usp=share_link" className="resumePrompt" target="_blank" rel="noopener noreferrer">
                <img src={link} alt="" className="linkImage" />
                <span>Resume</span>
            </a>
            <a className="resumePrompt No"> NO </a>
        </div>
    );
}

export default ResumePrompt;
