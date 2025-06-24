import React from 'react'
import './CardExpanded.css'
import DrumKitPhoto from '../../assets/CardsInfo/DrumKitCard.jpg';
import SimonSaysPhoto from '../../assets/CardsInfo/SimonSaysCard.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { isCardExpandedActionCreator } from '../../redux/actionCreatorPortfolio';
import plus from '../../assets/plus.png'
import { Link } from 'react-router-dom';


function CardExpanded() {
    const reduxCardInfo = useSelector((store) => {return store.cardInfo});
    let dispatch = useDispatch();

    const closeClickHandler = () => {
        dispatch(isCardExpandedActionCreator(false));
    }

  return (
    <div className='outerexpandedCardContainer' >
    

    <div className='expandedCardContainer' >
        <div className='closeDiv' ><button className='closeCardBtn' onClick={closeClickHandler}></button></div>

        <img src={reduxCardInfo.image} alt={reduxCardInfo.name + " poster"} className="expandedImage"/>


        <div className='bottomFadeOverlay2' style = {{position: 'relative', top: '-60px',  height: '50px', background: 'linear-gradient(to bottom, rgba(40, 163, 140, 0), rgba(24, 24, 24, 0.974))', width: '100%', zIndex:1010}}>
            <div className='playBtn outsidePlayBtn'> {reduxCardInfo.urlOut ? <a href={reduxCardInfo.urlOut}>▶ Play</a> : <Link to={reduxCardInfo.url}>▶ Play</Link> }   </div>
        </div>

        <div className='expandedDetailsContainer'>
            <div className='expandedDetails'>
                <h2>{reduxCardInfo.name}</h2>
                {/* {console.log('THIS IS THE INFO IN THE EXPANDED CARD',reduxCardInfo)} */}
                <h4>{reduxCardInfo.description}</h4>
                <div className='playBtn insidePlayBtn'> {reduxCardInfo.urlOut ? <a href={reduxCardInfo.urlOut}>▶ Play</a> : <Link to={reduxCardInfo.url}>▶ Play</Link> }   </div>
                {/* <button>hi</button> <button>bye</button> */}
                <br />
                {reduxCardInfo.expandedInfo ||  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, beatae ex fugiat impedit tempore voluptatum a commodi dolore aliquam non, accusamus soluta obcaecati debitis possimus reprehenderit dolorem minus rerum provident.</p>}
                {/* <p>{reduxCardInfo.expandedInfo}</p> */}
            </div>    
            
        </div>
    </div>
    </div>
  )
}

export default CardExpanded