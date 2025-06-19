import React, { useState } from 'react'
import './IsSeven.css'
import TypewriterStatusChain from '../Typewriter/TypewriterStatusChain';

function IsSeven() {

    const [isSevenInput, setIsSevenInput] = useState();
    const [isCheckingSeven, setIsCheckingSeven] = useState(false);
    const [isCheckComplete, setIsCheckComplete] = useState(false);

    function handleState(e) {
        setIsSevenInput(e.target.value.trim().toLowerCase());
    }

    function handleSumbit(e) {
        setIsCheckComplete(false);
        e.preventDefault();
        setIsCheckingSeven(true);
        setTimeout(()=>{setIsCheckingSeven(false); setIsCheckComplete(true)}, 30000);
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
        {isCheckComplete  && 'DONE'}
        <div className='isSevenResult'>
            <div>
                {isCheckComplete || <h2>YEP, IT'S 7</h2>}
            </div>
        </div>

    </div>
  )
}

export default IsSeven