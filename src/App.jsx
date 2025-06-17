import { useState , useEffect} from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
// import CardsContainer from './components/CardsContainer/CardsContainer'
import CardHorizontal from './components/CardHorizontal/CardHorizontal'
import CardExpanded from './components/CardExpanded/CardExpanded'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'


function App() {
  // const [isCardClicked, setIsCardClicked] = useState(true);
  const isCardClicked = useSelector(store => {return store.isCardExpanded})
  const navigate = useNavigate();

  const location = useLocation();
    if (location.hash === '#bodyContainerNew') {
      const el = document.getElementsByClassName(location.hash.slice(1))[0]; // remove the '#'
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      navigate();
    }



  return (
    <>
      <Nav />
      <Banner />

    {/* <CardsContainer /> */}
      <CardHorizontal />

    {isCardClicked && <CardExpanded />}

    </>
  )
}

export default App
