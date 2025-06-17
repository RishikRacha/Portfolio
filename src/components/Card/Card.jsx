import React from "react";
import "./Card.css";

import myStore from "../../redux/storePortfolio";
import {isCardExpandedActionCreator, cardInfoActionCreator} from "../../redux/actionCreatorPortfolio";
import { useSelector, useDispatch } from "react-redux";

function Card({ name, image, description, url }) {
    const dispatch = useDispatch();

    function handleHoverStart(e) {
        e.currentTarget.style.zIndex = 9999;
      }
      
      function handleHoverEnd(e) {
        e.currentTarget.style.zIndex = 2; // reset to default
      }
      

    function clickHandler() {
        dispatch(isCardExpandedActionCreator(true));
        console.log("clicked");
        dispatch(cardInfoActionCreator({ name, description, image, url }));
    }

    return (
        <div className="cardContainer hoverContainer"onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
            <img src={image} alt={name} />

            <div className="cardText">
                <button onClick={clickHandler}>Go</button>
                <button onClick={clickHandler}>info</button>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;
