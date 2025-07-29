import React from "react";
import DrumKitPhoto from "../../assets/CardsInfo/DrumKitCard.jpg";
import SimonSaysPhoto from "../../assets/CardsInfo/SimonSaysCard.jpg";
import PrimEraLogo from "../../assets/CardsInfo/PrimEraLogo.jpg";
import IsSevenCard from "../../assets/CardsInfo/IsSevenCard.jpg";
import FeedTheManCard from "../../assets/CardsInfo/FeedTheManCard.jpg";
import AmmuseumCard from "../../assets/CardsInfo/AmmuseumCard.jpg";
import PortfolioCard from "../../assets/CardsInfo/portflix.jpg";


export default [
    {
        name: "Drum Kit",
        image: DrumKitPhoto,
        description: <p>This is a simple HTML, CSS and Javascript page</p>,
        urlOut: "/Portfolio/drumkit/index.html",
    },
    {
        name: "Simon Says",
        image: SimonSaysPhoto,
        description: (
            <span>
                A fun memory game where you have to follow the random pattern on each level.
            </span>
        ),
        urlOut: "/Portfolio/simonGame/simonGame.html",
    },
    {
        name: "Is it 7?",
        image: IsSevenCard,
        description: <p>Check if something is 7 or not</p>,
        url: "/game/isSeven",
        expandedInfo: <div>
            <p>This game was created as a component of this portfolio app. It uses React to take the user input, and an npm package for the typewriter effect. At the end of execution of the typewriter function, it finally checks the user inputted value to check if its 7 or  even seven (cheeky ik)</p>
            <br />
            <a href="https://github.com/RishikRacha/Portfolio/tree/3c57bc3c7bdfbea39bed2077794f267ced82882d/src/pages/Games/components/IsSeven" target="_blank" rel="noopener noreferrer">GitHub</a>
            <br /> <br />
            </div>,
    },
    {
        name: "Feed The Guy",
        image: FeedTheManCard,
        description: <span>Feed the guy... and keep him healthy perhaps? Your choice though, I don't wanna impose</span>,
        url: "/game/FeedTheGuy",
        expandedInfo:<div>
            <p>I created this game as a component of this portfolio app itself. It uses React with simple state management to achieve the intended functions. The guy dies if you feed him too much or make him exercise while starving. </p>
            <br />
            <a href="https://github.com/RishikRacha/Portfolio/tree/3c57bc3c7bdfbea39bed2077794f267ced82882d/src/pages/Games/components/FeedTheGuy" target="_blank" rel="noopener noreferrer">GitHub</a>
            <br /> <br />
        </div>,
    },
    {
        name: "Freelance Project: Ammuseum",
        image: AmmuseumCard,
        description: <h3 style={{ margin: "auto" }}>MERN Stack Project: <br /> Cafe Website</h3>,
        url: "https://ammuseumwebsite.onrender.com/board-games",
        expandedInfo: <div>
            <p>A MERN full stack project, currently hosted on a free test server. This project taught me how to account for real-world problems when building real apps. I have gone through a lot of iterations and my app's architecture gradually evolved for the better as I kept learning from my mistakes and made better choices. <br /><br /> It uses RESTful APIs, React, Redux, and localStorage for quicker loading times. </p>
            <br />
            <a href="https://github.com/RishikRacha/AmmuseumWebsite" target="_blank" rel="noopener noreferrer">GitHub</a> <br /> <br />
        </div>

    },
    {
        name: "Portfolio Website",
        image: PortfolioCard,
        description: <h3 >React Project</h3>,
        url: "",
        expandedInfo: <div>
            <p>A React + Vite app (this website). This is my portfolio, built from scratch to look like the Netflix website. I had to use Redux for state management, which helped my proficiency in using Redux.</p>
            <br />
            <a href="https://github.com/RishikRacha/Portfolio" target="_blank" rel="noopener noreferrer">GitHub</a> <br /> <br />
        </div>

    },
    {
        name: "Work Experience",
        image: PrimEraLogo,
        description: (
            <h4 style={{ margin: 0 }}><b> Cybersecurity Intern, <br /> PrimEra Medical Technologies </b></h4>
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
    }

    ,{ name: "HTML + CSS", image: "https://media.licdn.com/dms/image/v2/D5612AQFMxThwQn7HZg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697274440798?e=2147483647&v=beta&t=QLEHZgio8uRKebsNCrjEdh3rOvVmSUa7dSYgzCPBxBo"}
    ,{ name: "React", image: "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png"}
    ,{ name: "MongoDB", image: "https://images.ctfassets.net/23aumh6u8s0i/6wTbGkTM3EBoO6hytvOcXj/d0144f86227382219fd2c8f4f53499c6/illustration"}
    ,{ name: "NodeJS", image: "https://s3.eu-west-1.amazonaws.com/redsys-prod/articles/805986adacd01b9880e272ba/images/teaserImage_xxxx_Shutterstock_1740811289_1697693002184.jpg"}
    ,{ name: "Java", image: 'https://www.macworld.com/wp-content/uploads/2023/01/learn_java_on_mac.jpg?quality=50&strip=all'}
    ,{ name: "Python", image: "https://img1.wallspic.com/previews/5/9/3/3/6/163395/163395-python-data_2019_survey-standing-data_science-big_data-550x310.jpg"}
    ,{ name: "mySQL", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBn9djlMmqMEnNhETDtAZUaVMxhO5jvldqqA&s"}
    ,{ name: "C++", image: "https://miro.medium.com/v2/resize:fit:1400/1*ImTT0nd7BZUPe3S8XS_juA.png"}
    ,{ name: "C#", image: "https://kodigowebstorage.blob.core.windows.net/kodigowebsite/2023/08/csharp.png"}
];
