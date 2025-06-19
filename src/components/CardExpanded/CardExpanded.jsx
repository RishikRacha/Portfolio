import React from 'react'
import './CardExpanded.css'
import DrumKitPhoto from '../../assets/CardsInfo/DrumKitCard.jpg';
import SimonSaysPhoto from '../../assets/CardsInfo/SimonSaysCard.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { isCardExpandedActionCreator } from '../../redux/actionCreatorPortfolio';
import plus from '../../assets/plus.png'


function CardExpanded() {
    const reduxCardInfo = useSelector((store) => {return store.cardInfo});
    let dispatch = useDispatch();

    let cardsInfo = [
            {   name: 'Drum Kit',
                image: DrumKitPhoto,
                description: 'This is a simple HTML, CSS and Javascript page '
            },
            {
                name: 'Simon Says',
                image: SimonSaysPhoto,
                description: 'This is a fun memory game where you have to follow the random pattern on each level. It was made using simple HTML, CSS, and Javascript.'
            },
        ];

    const closeClickHandler = () => {
        dispatch(isCardExpandedActionCreator(false));
    }

  return (
    <div className='outerexpandedCardContainer' >
    

    <div className='expandedCardContainer' >
        <div className='closeDiv' ><button className='closeCardBtn' onClick={closeClickHandler}></button></div>

        <img src={reduxCardInfo.image} alt="logo of DrunKit" className="expandedImage"/>


        <div className='bottomFadeOverlay2' style = {{position: 'relative', top: '-60px',  height: '50px', background: 'linear-gradient(to bottom, rgba(40, 163, 140, 0), rgba(24, 24, 24, 0.974))', width: '100%', zIndex:1010}}>
            <div className='playBtn'> <a href={reduxCardInfo.url}>▶Play</a>   </div>
        </div>

        <div className='expandedDetailsContainer'>
            <div className='expandedDetails'>
                <h2>{reduxCardInfo.name}</h2>
                {/* {console.log('THIS IS THE INFO IN THE EXPANDED CARD',reduxCardInfo)} */}
                <p>{reduxCardInfo.description}</p>
                <br />
                <button>hi</button> <button>bye</button>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, beatae ex fugiat impedit tempore voluptatum a commodi dolore aliquam non, accusamus soluta obcaecati debitis possimus reprehenderit dolorem minus rerum provident.</p>
                <br />
                <button>idk</button>
            </div>    
            
        </div>
    </div>
    </div>
  )
}

export default CardExpanded