// src/components/ScrollHandler.jsx
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ScrollHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = location.hash;

    if (hash === '#bodyContainerNew') {
      const el = document.getElementsByClassName(hash.slice(1))[0];
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } 
    else if (hash === '#learning') {
      const el = document.getElementsByClassName('bodyTitle')[1];
      if (el) {
        const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementTop , behavior: 'smooth' });
      }
    } 

    // navigate();
  }, [location]);

  return null; // this component doesn't render anything
}
