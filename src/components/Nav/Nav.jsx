import {useState, useEffect} from 'react'
import './Nav.css'
import { Link , useNavigate} from 'react-router-dom'
import profileIcon from '../../assets/coverImg_suit.JPG'
import whiteArrow from '../../assets/whiteArrow.png'
import phoneIcon from '../../assets/phoneIcon.png'

// const navigate = useNavigate();
let linkedInIcon = 'https://ytpr.co.ke/wp-content/uploads/2020/06/linkedin-icon-png-transparent-background-8.png';
let githubIcon = 'https://img.icons8.com/ios11/512/FFFFFF/github.png';

function Nav() {
  const [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {setIsOpaque(window.scrollY > 10);}; // make nav opaque after scrolling a lil bit

    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToSection(y) {             // only to scroll to home and top quickly
    window.scrollTo({top: y, behavior: 'smooth'})
  }

  function phoneClickHandler() {
    navigator.clipboard.writeText("+91 9676644007");
    document.getElementById('mobileText').innerHTML = '<p style="color: red; font-size: 12px">Copied to Clipboard</p>';
    setTimeout(() => document.getElementById('mobileText').innerText = 'Mobile', 500)
  }

  
  return (
    <div className={`navContainer ${isOpaque ? 'opaque' : ''}`}>
        <div className='left'>
            <h1 className='title' onClick={scrollToSection}>MERNFLIX</h1>
            <Link className='navButton' to="/" onClick={() => scrollToSection(11)}>Home</Link>
            <Link className='navButton' to="/#subheading1" >Projects</Link>
            <Link className='navButton' to="/#subheading2">Skills</Link>
            <Link className='navButton' to="/public/resume">Resume/CV</Link>
        </div>
        <div className='right'>
            <div className='profileContainer' >
                <div className='profileIcon'>
                    <img src={profileIcon} className='profileIconImg'/>
                    <img src={whiteArrow} id='profileIconArrow'/>
                </div>

                <div id='dropdownMenu'>
                                    
                <div className="dropdownButtons" onClick={phoneClickHandler}>
                    <img className="dropdownIconImg" src={phoneIcon} alt="icon" />
                    <span id='mobileText'>Mobile</span>
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