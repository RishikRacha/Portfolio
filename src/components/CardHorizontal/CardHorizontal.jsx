import React from 'react'
import './CardHorizontal.css'
import DrumKitPhoto from '../../assets/CardsInfo/DrumKitCard.jpg'
import SimonSaysPhoto from '../../assets/CardsInfo/SimonSaysCard.jpg'
import Card from '../Card/Card'
import { useNavigate } from 'react-router-dom'
import CardExpanded from '../CardExpanded/CardExpanded'
import arrow from '../../assets/whiteArrowLeft.png'


function CardHorizontal() {
    let cardsInfo = [
        {   name: 'Drum Kit',
            image: DrumKitPhoto,
            description: 'This is a simple HTML, CSS and Javascript page ',
            url: 'simonGame/simonGame.html'
        },
        {
            name: 'Simon Says',
            image: SimonSaysPhoto,
            description: 'A fun memory game where you have to follow the random pattern on each level.',
            url: 'simonGame/simonGame.html'
        },
    ];

    function goRightHandler(toRight ,i) {
        // const currentTransform = document.getElementsByClassName('cardsContainerNew')[i].style.transform;
        // const currentTranslateX = currentTransform ? parseInt(currentTransform.match(/-?\d+/)[0]) : 0;
        // console.log('CURRENTLY ITS: ',(currentTransform));
        
        if(toRight) {
            document.getElementsByClassName('cardsContainerNew')[i].classList.add('moveLeft1024');
            // document.getElementsByClassName('cardsContainerNew')[i].style.transform = `translateX(${currentTranslateX - 90}%)`;
        }
        else        {
            document.getElementsByClassName('cardsContainerNew')[i].classList.remove('moveLeft1024')
            // document.getElementsByClassName('cardsContainerNew')[i].style.transform = `translateX(${currentTranslateX + 90}%)`;
        }
    }


  return (
    <div className='bodyContainerNew'>


        <h2 id='bodytitle'>Small Games I Made</h2>

        <div className='cardsContainerNew'>
            <Card name={cardsInfo[0].name} image={cardsInfo[0].image} description={cardsInfo[0].description} url= {cardsInfo[0].url} />
            <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} url= {cardsInfo[1].url} />
            <Card name={cardsInfo[0].name} image={cardsInfo[0].image} description={cardsInfo[0].description} url= {cardsInfo[0].url} />
            <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} url= {cardsInfo[1].url} />
            <Card name={cardsInfo[0].name} image={cardsInfo[0].image} description={cardsInfo[0].description} url= {cardsInfo[0].url} />
            <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} url= {cardsInfo[1].url} />
        </div>
        <div className='leftrightbtns'>
            <div className='leftbtn  lrbtn' onClick={() => {goRightHandler(false,0)}}> <img src={arrow}/> </div>
            <div className='rightbtn lrbtn' onClick={() => {goRightHandler(true, 0)}}> <img src={arrow}/> </div>
        </div>

        <h2>My skills</h2>
        <div className='cardsContainerNew'>
            <Card name={cardsInfo[0].name} image={cardsInfo[0].image} description={cardsInfo[0].description} />
            <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} />
        </div>
        <div className='leftrightbtns'>
            <div className='leftbtn  lrbtn' onClick={() => {goRightHandler(false,1)}}> <img src={arrow}/> </div>
            <div className='rightbtn lrbtn' onClick={() => {goRightHandler(true, 1)}}> <img src={arrow}/> </div>
        </div>



      </div>
  )
}

export default CardHorizontal