import React, { useState } from "react";
import "./FeedTheGuy.css";
import fat0 from '../../assets/fatLevels/fat0.png'
import fat1 from '../../assets/fatLevels/fat1.png'
import fat2 from '../../assets/fatLevels/fat2.png'
import fat3 from '../../assets/fatLevels/fat3.png'
import fat4 from '../../assets/fatLevels/fat4.png'
import fat5 from '../../assets/fatLevels/fat5.png'
import fat6 from '../../assets/fatLevels/fat6.png'
import fat7 from '../../assets/fatLevels/fat7.png'
import fat8 from '../../assets/fatLevels/fat8.png'
import fat9 from '../../assets/fatLevels/fat9.png'
import burger from '../../assets/fatLevels/burger.png'
import salad from '../../assets/fatLevels/salad.png'
import dumbbell from '../../assets/fatLevels/dumbbell.png'
import Nav from "../../../../components/Nav/Nav";


function FeedTheGuy() {
    const [fatLevel, setFatLevel] = useState(4);
    const [energyLevel, setEnergyLevel] = useState(4);
    const [alertMessage, setAlertMessage] = useState('');
    const [hazards, setHazards] = useState(0);

    function exercise() {
        if(fatLevel >= 2) setFatLevel(prev => prev-1);
        if(energyLevel > 1) setEnergyLevel(prev => prev-1) 
        else {
            guyAlert("Calm down! Let bro eat ffs, he's gonna die!");
            setHazards(prev => prev+1)
        }
    }

    function eatBurger() {
        if(energyLevel < 8) setEnergyLevel(prev => prev+1);

        if(fatLevel < 8) setFatLevel(prev => prev+0.5) 
        else {guyAlert("I don't think bro should have more junk..."); setHazards(prev => prev+1)}

        
    }

    

    function eatSalad() {
        if(energyLevel < 8) setEnergyLevel(prev => prev+1);
    }

    function _seeLevels() {
        console.log('Energy: '+ energyLevel + ' || Fat: '+fatLevel);
    }

    function guyAlert(message) {
        let timeout = 1500;
        if(hazards >= 2) {
            message ='Guy is dead. You are responsible. Now live with blood on your hands FOREVER... or just wait for the new guy';
            energyLevel==1 ? setFatLevel(0) : setFatLevel(9);
            timeout = 6000;
            setTimeout(() => {
                if(fatLevel<9 && fatLevel>0){setEnergyLevel(4); setFatLevel(4); setHazards(0);}
            }, timeout*1.5)
        }

        setAlertMessage(message);
        setTimeout(() => {
            setAlertMessage('');
        }, timeout)
    }


    return <>
    <Nav />
    <div className="feedTheGuyContainer">

        <h1>FEED THE GUY <span>(pls don't kill him)</span></h1>
        <div className="guyContainer">
            {/* <div className="mouth" onClick={_seeLevels}></div> */}
            <img src={[fat0, fat1, fat2, fat3, fat4, fat5, fat6, fat7, fat8, fat9][Math.floor(fatLevel ) ]} alt="a guy who might be fat or fit" />
        </div>
        {alertMessage &&  <div className="guyAlertDiv"><div className="guyAlertsContainer">
            <span>{alertMessage}</span>
        </div></div>}


        <div className="guyActionsContainer">

            <div className="guyAction">
                <img src={burger} alt="burger image" onClick={eatBurger}/>
                <h2>Burger</h2>
            </div>

            <div className="guyAction">
                <img src={salad} alt="salad image" onClick={eatSalad}/>
                <h2>Salad</h2>
            </div>

            <div className="guyAction">
                <img src={dumbbell} alt="Exercise" onClick={exercise}/>
                <h2>Exercise</h2>
            </div>
        </div>
        
    </div></>
}

export default FeedTheGuy;
