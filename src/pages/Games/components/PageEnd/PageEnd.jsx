import React, { useRef } from "react";
import "./PageEnd.css";

function PageEnd() {
    const noBtnRef = useRef(null);
    const pageEndRef = useRef(null);


    const handleMovement = () => {
        const noBtn = noBtnRef.current;
        const container = pageEndRef.current;

        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;

        // Generate safe random positions
        const maxX = containerWidth - btnWidth;
        const maxY = containerHeight - btnHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    };

    return (
        <div className="pageEndContainer" ref={pageEndRef}>
            <h3>
                Did you like my page? Click YES if you did, and give a poor dev
                a ray of hope :P
            </h3>
            <h3>
                and NO if you don't. That's fine too ig, I value honest feedback
            </h3>
            <div className="feedbackBtnContainer">
                <button className="yesReviewBtn">YES</button>
                <button
                    id="noReviewBtn"
                    ref={noBtnRef}
                    onMouseEnter={handleMovement}
                >
                    no
                </button>
            </div>
        </div>
    );
}

export default PageEnd;
