import React from "react";
import DrumKitPhoto from "../../assets/CardsInfo/DrumKitCard.jpg";
import SimonSaysPhoto from "../../assets/CardsInfo/SimonSaysCard.jpg";
import PrimEraLogo from "../../assets/CardsInfo/PrimEraLogo.jpg";
import IsSevenCard from "../../assets/CardsInfo/IsSevenCard.jpg";
import FeedTheManCard from "../../assets/CardsInfo/FeedTheManCard.jpg";

export default [
    {
        name: "Drum Kit",
        image: DrumKitPhoto,
        description: <p>This is a simple HTML, CSS and Javascript page</p>,
        url: "/Portfolio/drumkit/index.html",
    },
    {
        name: "Simon Says",
        image: SimonSaysPhoto,
        description: (
            <span>
                A fun memory game where you have to follow the random pattern on
                each level.
            </span>
        ),
        url: "/Portfolio/simonGame/simonGame.html",
    },
    {
        name: "Is it 7?",
        image: IsSevenCard,
        description: <p>Check if something is 7 or not</p>,
        url: "/Portfolio/game/isSeven",
    },
    {
        name: "Feed The Guy",
        image: FeedTheManCard,
        description: (
            <span>
                Feed the guy... and keep him healthy perhaps? Your choice though, I don't wanna impose
            </span>
        ),
        url: "/Portfolio/game/FeedTheGuy",
    },
    {
        name: "Work Experience",
        image: PrimEraLogo,
        description: (
            <h3 style={{ margin: 0 }}><b> Cybersecurity Intern, <br /> PrimEra Medical Technologies </b></h3>
        ),
        url: "https://www.linkedin.com/company/primeramt",
        expandedInfo:
            "As an intern at PrimEra Medical Technologies, I worked under multiple teams which helped me gain diverse skills like Networking, Pen-testing, Web Application Assessment, Threat Intelligence and more. In my path, I also had the opportunity to learn using the Linux CLI, SQL queries, and Python Scripting to my advantage.",
    },
    {
        name: "Swecha",
        image: "https://media.licdn.com/dms/image/v2/C561BAQGMDl2O-bVO-A/company-background_10000/company-background_10000/0/1613791082651/swechafsmi_cover?e=2147483647&v=beta&t=2O4aaAWzLZ2j3vF3BiRRUXZ3GToFvTijN_YUBPgeOnQ",
        description: <h3>SDE Intern at Swecha</h3>,
        url: "https://www.linkedin.com/company/swechafsmi",
        expandedInfo:
            "As an intern at Swecha, I worked on the BalaSwechaOS, an open source operating system for underprivileged school children. I had the opportunity to get hands on experience in HTML , CSS and basic Javascript.",
    },
];
