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
        return (isSevenInput == 'seven' || isSevenInput == 7);
        console.log(isSevenInput);
        
    }

    function handleSumbit(e) {
        setIsCheckComplete(undefined);      //undefined is registered as false for both ==true and ==false so it removes the isSevenResult div
        setIsCheckingSeven(true);
        setTimeout(()=>{setIsCheckingSeven(false); setIsCheckComplete(checkIsSeven());}, 30000);
    }


  return (
    <div className='isSevenContainer'>
        <h2>7 CHECKER</h2>
        <input type="text" placeholder="Type a number to check if it's 7" onChange={handleState}/>
        <button className='submitIsSeven' onClick={handleSumbit}>{isSevenInput ? isSevenInput : 'Check'}</button>

        {isCheckingSeven  &&  <TypewriterStatusChain />}
        <div className='isSevenResult'>
                {isCheckComplete==true ? <h3>YEP, IT'S 7 👀</h3> : null }
                {isCheckComplete==false ? <h3>IT'S NOT 7 @_@</h3> : null}
        </div>

    </div>
  )
}

export default IsSeven