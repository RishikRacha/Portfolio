// src/components/ScrollHandler.jsx
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ScrollHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = location.hash;

    if (hash === '#subheading1') {
      const el = document.getElementsByClassName('bodyTitle')[0];
      if (el) {
        const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementTop-80 , behavior: 'smooth' });
      }
    } 
    else if (hash === '#subheading2') {
      const el = document.getElementsByClassName('bodyTitle')[1];
      if (el) {
        const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementTop-80 , behavior: 'smooth' });
      }
    } 

    // navigate();
  }, [location]);

  return null; // this component doesn't render anything
}
