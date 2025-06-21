import React from 'react'
import './CardHorizontal.css'

import DrumKitPhoto from '../../assets/CardsInfo/DrumKitCard.jpg'
import SimonSaysPhoto from '../../assets/CardsInfo/SimonSaysCard.jpg'
import PrimEraLogo from '../../assets/CardsInfo/PrimEraLogo.jpg'
import IsSevenCard from '../../assets/CardsInfo/IsSevenCard.jpg'
import FeedTheManCard from '../../assets/CardsInfo/FeedTheManCard.jpg'



import Card from '../Card/Card'
import arrow from '../../assets/whiteArrowLeft.png'
import allCardsInfo from './CardInfo'



function CardHorizontal() {
    let cardsInfo = [
        {   name: 'Drum Kit',
            image: DrumKitPhoto,
            description: <p>This is a simple HTML, CSS and Javascript page '</p>,
            url: '/Portfolio/drumkit/index.html'
        },
        {
            name: 'Simon Says',
            image: SimonSaysPhoto,
            description: <span>A fun memory game where you have to follow the random pattern on each level.</span>,
            url: '/Portfolio/simonGame/simonGame.html'
        },
        {
            name: 'Is it 7?',
            image: IsSevenCard,
            description: <p>Check if something is 7 or not</p>,
            url: '/Portfolio/game/isSeven'
        },
        {
            name: 'Feed The Guy',
            image: FeedTheManCard,
            description: <span>Feed the guy... and keep him healthy perhaps? Your choice though, I don't wanna impose</span>,
            url: '/Portfolio/game/FeedTheGuy'
        },
        {
            name: 'Work Experience',
            image: PrimEraLogo,
            description: <h3 style={{margin:0}}><b>Cybersecurity Intern, <br/> PrimEra Medical Technologies</b></h3>,
            url:'https://www.linkedin.com/company/primeramt' ,
            expandedInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores natus, quos, amet est accusantium repellat, aliquam iure aliquid enim asperiores harum distinctio. Aspernatur iste corporis excepturi sed quis. Ipsa, non corporis dicta ratione ex commodi voluptates deserunt libero, id eum nihil reprehenderit! Necessitatibus, impedit. Deleniti id aliquid animi officiis unde, expedita at nisi eaque, rerum iusto fugit. Veniam quod, magni enim suscipit nulla pariatur voluptatem! Quaerat doloribus rem alias ipsa nesciunt voluptate delectus possimus cum beatae enim mollitia cupiditate exercitationem cumque blanditiis, inventore obcaecati. Mollitia fugit itaque tempore omnis? Magni, explicabo! Totam perferendis, accusantium dicta incidunt officia asperiores culpa corrupti.",

        },
        {
            name: 'Swecha',
            image: 'https://media.licdn.com/dms/image/v2/C561BAQGMDl2O-bVO-A/company-background_10000/company-background_10000/0/1613791082651/swechafsmi_cover?e=2147483647&v=beta&t=2O4aaAWzLZ2j3vF3BiRRUXZ3GToFvTijN_YUBPgeOnQ',
            description: <h3>SDE Intern at Swecha</h3>,
            url: 'https://www.linkedin.com/company/swechafsmi',
            expandedInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores natus, quos, amet est accusantium repellat, aliquam iure aliquid enim asperiores harum distinctio. Aspernatur iste corporis excepturi sed quis. Ipsa, non corporis dicta ratione ex commodi voluptates deserunt libero, id eum nihil reprehenderit! Necessitatibus, impedit. Deleniti id aliquid animi officiis unde, expedita at nisi eaque, rerum iusto fugit. Veniam quod, magni enim suscipit nulla pariatur voluptatem! Quaerat doloribus rem alias ipsa nesciunt voluptate delectus possimus cum beatae enim mollitia cupiditate exercitationem cumque blanditiis, inventore obcaecati. Mollitia fugit itaque tempore omnis? Magni, explicabo! Totam perferendis, accusantium dicta incidunt officia asperiores culpa corrupti.",
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
            <Card {...allCardsInfo[0]}/>
            <Card {...allCardsInfo[1]}/>
            <Card {...cardsInfo[2]} />
            <Card {...cardsInfo[3]} />
            <Card {...cardsInfo[0]} />
            <Card {...cardsInfo[1]} />
            </div>
       

        <h2 className='bodyTitle'>My skills</h2>
        <div className='cardsContainerNew'>
            <Card {...cardsInfo[1]}/>
            <Card {...cardsInfo[0]}/>
        </div>


        <h2 className='bodyTitle'>Experience</h2>
        {LrButtons(2)}
        <div className='cardsContainerNew'>
            {/* <Card name={cardsInfo[4].name} image={PrimEraLogo} description={cardsInfo[4].description} url={cardsInfo[4].url}/> */}
            <Card {...allCardsInfo[4]}/>
            <Card {...allCardsInfo[5]}/>
        </div>

        <h2 className='bodyTitle'>Fin</h2>
    </div>

  )
}

export default CardHorizontal