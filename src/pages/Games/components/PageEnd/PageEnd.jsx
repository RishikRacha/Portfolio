import React from "react";
import "./PageEnd.css";
import IsSeven from "../IsSeven/IsSeven";

function PageEnd() {
    return (
        <div className="pageEndContainer">
            <h2>Fin</h2>
            <div className="leftrightDivs">
                <div className="leftDiv">

                </div>
                <div className="rightDiv">
                    <IsSeven />
                </div>
            </div>
        </div>
    );
}

export default PageEnd;
