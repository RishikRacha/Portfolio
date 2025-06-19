import React, { useState } from 'react'
import './IsSeven.css'
import TypewriterStatusChain from '../Typewriter/TypewriterStatusChain';

function IsSeven() {

    const [isSevenInput, setIsSevenInput] = useState();
    const [isCheckingSeven, setIsCheckingSeven] = useState(false);
    const [isCheckComplete, setIsCheckComplete] = useState();

    function handleState(e) {
        setIsSevenInput(e.target.value.trim().toLowerCase());
    }

    function checkIsSeven() {
        if(isSevenInput == 7 || isSevenInput == 'seven') return true;
        else return false;
    }

    function handleSumbit(e) {
        setIsCheckComplete(undefined);      //undefined is registered as false for both ==true and ==false so it removes the isSevenResult div
        e.preventDefault();
        setIsCheckingSeven(true);
        setTimeout(()=>{setIsCheckingSeven(false); setIsCheckComplete(isSevenInput == 7);}, 3000);
    }


const alwaysShow = [
    "Processing data...",
    "Drinking some coffee first...",
    "Reaching servers...",
    "Cross-examining a very nervous 6...",
    "Asking ChatGPT...",
    "Now asking some real humans for verification...",
    "Asking the number Gods now...",
];

  return (
    <div className='isSevenContainer'>
        <h2>7 CHECKER</h2>
        <input type="text" placeholder="Type a number to check if it's 7" onChange={handleState}/>
        <button className='submitIsSeven' onClick={handleSumbit}>{isSevenInput ? isSevenInput : 'Check'}</button>

        {isCheckingSeven  &&  <TypewriterStatusChain />}
        <div className='isSevenResult'>
                {isCheckComplete==true ? <h3>YEP, IT'S 7</h3> : null }
                {isCheckComplete==false ? <h3>IT'S NOT 7</h3> : null}
                {/* {console.log(isCheckComplete==true)}
                {console.log(isCheckComplete==false)} */}
        </div>

    </div>
  )
}

export default IsSeven