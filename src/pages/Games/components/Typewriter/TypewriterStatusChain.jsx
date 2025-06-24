import React from "react";
import Typewriter from "typewriter-effect";
import './TypewriterStatusChain.css'

function TypewriterStatusChain() {
    const alwaysShow = [
        "Processing data...",
        "Drinking some coffee first",
        "Reaching servers...",
        "Asking ChatGPT...",
        "Cross-examining a very nervous 6     ",
        "Checking the belly for a 9     ",
        "Hacking your device...                             Oops! That was a secret.",
    ];
    
    return (
        <div>
            <Typewriter
                options={{
                    strings: alwaysShow,
                    autoStart: true,
                    loop: false,
                    cursor: "_",
                    delay: 40,
                    deleteSpeed: 15,
                    pauseFor: 1000,
                }}
            />
        </div>
    );
}

export default TypewriterStatusChain;
