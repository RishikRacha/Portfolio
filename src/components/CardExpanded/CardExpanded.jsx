import React from 'react'
import './CardExpanded.css'
import DrumKitPhoto from '../../assets/CardsInfo/DrumKitCard.jpg';
import SimonSaysPhoto from '../../assets/CardsInfo/SimonSaysCard.jpg';

function CardExpanded() {
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

  return (
    <div className='outerexpandedCardContainer' >
        
    <div className='expandedCardContainer' >
        <img src={DrumKitPhoto} alt="logo of DrunKit" className="expandedImage"/>
        <div className='bottomFaeOverlay' style = {{position: 'relative', top: '-60px',  height: '50px', background: 'linear-gradient(to bottom, rgba(40, 163, 140, 0), rgba(24, 24, 24, 0.974))', width: '100%', zIndex:1010}}></div>

        <div className='expandedDetails'>
            <br />
            <button>hi</button> <button>bye</button>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, beatae ex fugiat impedit tempore voluptatum a commodi dolore aliquam non, accusamus soluta obcaecati debitis possimus reprehenderit dolorem minus rerum provident.</p>
            <br />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam assumenda velit laborum sint consequatur facilis dolorum eius corporis dolore esse!</p>
            <br />
            <button>idk</button>
        </div>
    </div>
    </div>
  )
}

export default CardExpanded