import React from 'react'
import './CardHorizontal.css'
import DrumKitPhoto from '../../assets/CardsInfo/DrumKitCard.jpg'
import SimonSaysPhoto from '../../assets/CardsInfo/SimonSaysCard.jpg'
import PrimEraLogo from '../../assets/CardsInfo/PrimEraLogo.jpg'
import Card from '../Card/Card'
import { useNavigate } from 'react-router-dom'
import CardExpanded from '../CardExpanded/CardExpanded'
import arrow from '../../assets/whiteArrowLeft.png'
import plus from '../../assets/plus.png'



function CardHorizontal() {
    let cardsInfo = [
        {   name: 'Drum Kit',
            image: DrumKitPhoto,
            description: <p>This is a simple HTML, CSS and Javascript page '</p>,
            url: '/drumkit/index.html'
        },
        {
            name: 'Simon Says',
            image: SimonSaysPhoto,
            description: <p>A fun memory game where you have to follow the random pattern on each level.</p>,
            url: 'simonGame/simonGame.html'
        },
        {
            name: 'PrimEra Medical Technologies',
            image: PrimEraLogo,
            description: <><br /> <button>Company Information</button></>,
            url:'https://www.linkedin.com/company/primeramt' ,
        },
        {
            name: 'Swecha',
            image: 'https://media.licdn.com/dms/image/v2/C561BAQGMDl2O-bVO-A/company-background_10000/company-background_10000/0/1613791082651/swechafsmi_cover?e=2147483647&v=beta&t=2O4aaAWzLZ2j3vF3BiRRUXZ3GToFvTijN_YUBPgeOnQ',
            description: <h3>SDE Intern at Swecha</h3>,
            url: 'https://www.linkedin.com/company/swechafsmi',
        }
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
            <Card name={cardsInfo[0].name} image={cardsInfo[0].image} description={cardsInfo[0].description} url= {cardsInfo[0].url} />
            <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} url= {cardsInfo[1].url} />
            <Card name={cardsInfo[0].name} image={cardsInfo[0].image} description={cardsInfo[0].description} url= {cardsInfo[0].url} />
            <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} url= {cardsInfo[1].url} />
            <Card name={cardsInfo[0].name} image={cardsInfo[0].image} description={cardsInfo[0].description} url= {cardsInfo[0].url} />
            <Card name={cardsInfo[1].name} image={cardsInfo[1].image} description={cardsInfo[1].description} url= {cardsInfo[1].url} />
        </div>
       

        <h2 className='bodyTitle'>My skills</h2>
        {/* <div className='leftrightbtns'>
            <div className='leftbtn  lrbtn' onClick={() => {goRightHandler(false,1)}}> <img src={arrow}/> </div>
            <div className='rightbtn lrbtn' onClick={() => {goRightHandler(true, 1)}}> <img src={arrow}/> </div>
        </div> */}
        <div className='cardsContainerNew'>
            <Card {...cardsInfo[0]}/>
            <Card {...cardsInfo[1]} />
        </div>


        <h2 className='bodyTitle'>Experience</h2>
        {LrButtons(2)}
        <div className='cardsContainerNew'>
            <Card name='Cybersecurity Intern, Primera Medical Technologies' image={PrimEraLogo} description={cardsInfo[2].description} url={cardsInfo[2].url}/>
            <Card {...cardsInfo[3]}/>
        </div>

    </div>
  )
}

export default CardHorizontal