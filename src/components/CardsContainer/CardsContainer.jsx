import React from 'react'
import './CardsContainer.css'
import Card from '../Card/Card'
import DrumKitPhoto from '../../assets/CardsInfo/DrumKitCard.jpg'
import SimonSaysPhoto from '../../assets/CardsInfo/SimonSaysCard.jpg'


const style = {
    position: 'relative',
    zIndex: 100,
    top: '-150px',
    height: '150px',
    background: 'linear-gradient(to bottom, rgba(190, 0, 0, 0), rgb(20, 20, 20))',
    width: '100%',
};

let cardsInfo = [
    {   name: 'Drum Kit',
        image: DrumKitPhoto,
        description: 'This is a simple HTML, CSS and Javascript page '
    },
    {
        name: 'Simon Says',
        image: SimonSaysPhoto,
        description: 'This is a fun memory game where you have to follow the random pattern on each level. It was made using simple HTML, CSS, and Javascript.'
    }

]

function CardsContainer() {
    return (
        <>
        <div style={style} className='bodyContainer'>
                <h2 className='subHeading'>BODY OF THE APP</h2>
                
            </div>
            <div className='cardsContainer'>
                <Card name={cardsInfo[0].name} image={cardsInfo[0].image} description={cardsInfo[0].description} />
                <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} />
                <Card name={cardsInfo[0].name} image={cardsInfo[0].image} description={cardsInfo[0].description} />
                <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} />
                <Card name={cardsInfo[0].name} image={cardsInfo[0].image} description={cardsInfo[0].description} />
                <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} />
            </div>
            <div className='cardsContainer'>
                <Card name={cardsInfo[0].name} image={cardsInfo[0].image} description={cardsInfo[0].description} />
                <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} />
                <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} />
                <Card name={cardsInfo[0].name} image={cardsInfo[0].image} description={cardsInfo[0].description} />
                <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} />
                <Card name={cardsInfo[0].name} image={cardsInfo[0].image} description={cardsInfo[0].description} />
                <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} />
            </div>
        </>
    )
}

export default CardsContainer