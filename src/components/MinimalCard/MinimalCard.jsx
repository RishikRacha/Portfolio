import React from "react";
import "./MinimalCard.css";

function MinimalCard({ name, image}) {

    function handleHoverStart(e) {
        e.currentTarget.style.zIndex = 9999;
      }
      
      function handleHoverEnd(e) {
        e.currentTarget.style.zIndex = 2; 
      }


    return (
        <div className="cardContainer minimalHoverContainer"onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
            <img src={image} alt={name} />
        </div>
    );
}

export default MinimalCard;
