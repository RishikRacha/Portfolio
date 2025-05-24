import React from 'react'
import './CardHorizontal.css'
import DrumKitPhoto from '../../assets/CardsInfo/DrumKitCard.jpg'
import SimonSaysPhoto from '../../assets/CardsInfo/SimonSaysCard.jpg'
import Card from '../Card/Card'


function CardHorizontal() {
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
    <div className='bodyContainerNew'>
        <h2>Small Games I Made</h2>

        <div className='cardsContainerNew'>
            <Card name={cardsInfo[0].name} image={cardsInfo[0].image} description={cardsInfo[0].description} />
            <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} />
            <Card name={cardsInfo[0].name} image={cardsInfo[0].image} description={cardsInfo[0].description} />
            <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} />
            <Card name={cardsInfo[0].name} image={cardsInfo[0].image} description={cardsInfo[0].description} />
            <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} />
            <div className='rightbtn'>
        </div>


        </div>

        <h2>My skills</h2>
        <div className='cardsContainerNew'>
            <Card name={cardsInfo[0].name} image={cardsInfo[0].image} description={cardsInfo[0].description} />
            <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} />
        </div>

      </div>
  )
}

export default CardHorizontal