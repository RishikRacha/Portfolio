import React from "react";
import "./Card.css";
import arrow from '../../assets/whiteArrow.png'
import plus from '../../assets/plus.png'
import play from '../../assets/play.png'

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
                <div>
                    {/* <button onClick={clickHandler} className="cardinfobtn goBtn"  style={{backgroundImage: `url(${arrow})`}} ></button> */}
                    <span href={url} > 
                        <a href={url} rel="noopener noreferrer"> <img className="cardinfobtn goBtn"  src={play} /></a>
                        <a href={url} target="_blank" rel="noopener noreferrer" onClick={clickHandler}> <img className="cardinfobtn moregoBtn"  src={plus} /></a>
                        {/* <img onClick={clickHandler} className="cardinfobtn moregoBtn"  src={plus}/> */}
                    </span>

                    <img onClick={clickHandler} className="cardinfobtn moreBtn"  src={arrow} />
                </div>
                            {description}
            </div>
        </div>
    );
}

export default Card;
