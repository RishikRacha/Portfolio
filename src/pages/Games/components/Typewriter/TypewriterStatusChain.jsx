import React from "react";
import Typewriter from "typewriter-effect";
import './TypewriterStatusChain.css'

function TypewriterStatusChain() {
    const alwaysShow = [
        "Processing data...",
        "Drinking some coffee first",
        "Reaching servers...",
        "Asking ChatGPT...",
        "Double checking with real humans",
        "Ummm.. Triple checking with the Number Gods...      ",
        "Hacking your device...                             Oops! That was a secret.",
        "Cross-examining a very nervous 6     ",
        "Checking the belly for a 9     ",
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
