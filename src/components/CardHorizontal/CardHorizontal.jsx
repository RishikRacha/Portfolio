import React from 'react'
import './CardHorizontal.css'

import DrumKitPhoto from '../../assets/CardsInfo/DrumKitCard.jpg'
import SimonSaysPhoto from '../../assets/CardsInfo/SimonSaysCard.jpg'
import PrimEraLogo from '../../assets/CardsInfo/PrimEraLogo.jpg'
import IsSevenCard from '../../assets/CardsInfo/IsSevenCard.jpg'
import FeedTheManCard from '../../assets/CardsInfo/FeedTheManCard.jpg'



import Card from '../Card/Card'
import arrow from '../../assets/whiteArrowLeft.png'
import cardsInfo from './CardInfo'
import MinimalCard from '../MinimalCard/MinimalCard'



function CardHorizontal() {

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

    function LrButtons(i) {
        return (
            <div className='leftrightbtns'>
                <div className='leftbtn  lrbtn' onClick={() => {goRightHandler(false,i)}}> <img src={arrow}/> </div>
                <div className='rightbtn lrbtn' onClick={() => {goRightHandler(true, i)}}> <img src={arrow}/> </div>
            </div>
        )
    }

  return (
    <div className='bodyContainerNew'>


        <h2 className='bodyTitle'>Small Games I Made</h2>
        {LrButtons(0)}
        <div className='cardsContainerNew'>
            <Card {...cardsInfo[0]}/>
            <Card {...cardsInfo[1]}/>
            <Card {...cardsInfo[2]} />
            <Card {...cardsInfo[3]} />
            {/* <Card {...cardsInfo[0]} /> */}
            {/* <Card {...cardsInfo[1]} /> */}
            </div>
       

        <h2 className='bodyTitle'>Programming skills</h2>
        {LrButtons(1)}
        <div className='cardsContainerNew minimalCardsContainer'>
            <MinimalCard {...cardsInfo[6]}/>
            <MinimalCard {...cardsInfo[7]}/>
            <MinimalCard {...cardsInfo[8]}/>
            <MinimalCard {...cardsInfo[9]}/>
            <MinimalCard {...cardsInfo[10]}/>
            <MinimalCard {...cardsInfo[11]}/>
            <MinimalCard {...cardsInfo[12]}/>
            <MinimalCard {...cardsInfo[13]}/>
            <MinimalCard {...cardsInfo[14]}/>
        </div>


        <h2 className='bodyTitle'>Work Experience</h2>
        <div className='cardsContainerNew'>
            {/* <Card name={cardsInfo[4].name} image={PrimEraLogo} description={cardsInfo[4].description} url={cardsInfo[4].url}/> */}
            <Card {...cardsInfo[4]}/>
            <Card {...cardsInfo[5]}/>
        </div>

        <h2 className='bodyTitle'>Fin</h2>
    </div>

  )
}

export default CardHorizontal