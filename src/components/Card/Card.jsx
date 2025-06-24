import React from "react";
import "./Card.css";
import arrow from '../../assets/whiteArrow.png'
import plus from '../../assets/plus.png'
import play from '../../assets/play.png'

import {isCardExpandedActionCreator, cardInfoActionCreator} from "../../redux/actionCreatorPortfolio";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Card({ name, image, description, url, expandedInfo, urlOut}) {
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
        dispatch(cardInfoActionCreator({ name, description, image, url, expandedInfo, urlOut }));
    }



    return (
        <div className="cardContainer hoverContainer"onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
            <img src={image} alt={name} />

            <div className="cardText">
                <div>
                    {/* <button onClick={clickHandler} className="cardinfobtn goBtn"  style={{backgroundImage: `url(${arrow})`}} ></button> */}
                    {urlOut ? //uses anchor tag if there is a urlOut (which i have for the other html pages in public folder and Link for react routing)
                    <span > 
                        <a href={urlOut} rel="noopener noreferrer"> 
                            <img className="cardinfobtn goBtn"  src={play} />
                        </a>

                        <a href={urlOut} target="_blank" rel="noopener noreferrer" onClick={clickHandler}> 
                            <img className="cardinfobtn moregoBtn"  src={plus} />
                        </a>        
                    </span> 
                    :
                    <span>
                        <Link to={url} rel="noopener noreferrer"> 
                            <img className="cardinfobtn goBtn"  src={play} />
                        </Link>

                        <Link to={url} target="_blank" rel="noopener noreferrer" onClick={clickHandler}> 
                            <img className="cardinfobtn moregoBtn"  src={plus} />
                        </Link>
                    </span>}        

                    <img onClick={clickHandler} className="cardinfobtn moreBtn"  src={arrow} />
                </div>

                <span id="hoverDescription">{description}</span>

            </div>
        </div>
    );
}

export default Card;
