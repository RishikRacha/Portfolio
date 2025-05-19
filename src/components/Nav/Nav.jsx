import {useState, useEffect} from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import profileIcon from '../../assets/coverImg_suit.JPG'
import whiteArrow from '../../assets/whiteArrow.png'
import phoneIcon from '../../assets/phoneIcon.png'


let linkedInIcon = 'https://ytpr.co.ke/wp-content/uploads/2020/06/linkedin-icon-png-transparent-background-8.png';
let githubIcon = 'https://img.icons8.com/ios11/512/FFFFFF/github.png';

function Nav() {
  const [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpaque(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    <div className={`navContainer ${isOpaque ? 'opaque' : ''}`}>
        <div className='left'>
            <h1 className='title'>MERNFLIX</h1>
            <Link className='navButton' to="/">Home</Link>
            <Link className='navButton' to="/learning">Learning</Link>
            <Link className='navButton' to="/projects">Projects</Link>
            <Link className='navButton' to="/resume">Resume/CV</Link>
        </div>
        <div className='right'>
            <div className='profileContainer' >
                <div className='profileIcon'>
                    <img src={profileIcon} className='profileIconImg'/>
                    <img src={whiteArrow} id='profileIconArrow'/>
                </div>

                <div id='dropdownMenu'>
                    {/* <a className='dropdownButtons'> <img className="profileIconImg" src={profileIcon} /> <a>Mobile</a></a>
                    <a className='dropdownButtons' href='https://www.google.com'> <img className="profileIconImg" src={profileIcon} /> <a>LinkedIn</a></a>
                    <a className='dropdownButtons'> <img className="profileIconImg" src={profileIcon} /> <a>Github</a></a> */}

                                    
                <div className="dropdownButtons" onClick={() => navigator.clipboard.writeText("9779977979")}>
                    <img className="dropdownIconImg" src={phoneIcon} alt="icon" />
                    <span>Mobile</span>
                </div>

                <a className="dropdownButtons" href="https://in.linkedin.com/in/rishikracha" target="_blank">
                    <img className="dropdownIconImg" src={linkedInIcon} alt="icon" />
                    <span>LinkedIn</span>
                </a>

                <a className="dropdownButtons" href="https://github.com/RishikRacha" target="_blank" rel="noopener noreferrer">
                    <img className="dropdownIconImg" src={githubIcon} alt="icon" />
                    <span>Github</span>
                </a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav