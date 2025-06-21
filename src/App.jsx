import { useState , useEffect} from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
// import CardsContainer from './components/CardsContainer/CardsContainer'
import CardHorizontal from './components/CardHorizontal/CardHorizontal'
import CardExpanded from './components/CardExpanded/CardExpanded'
import { useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Resume from './components/Resume/Resume'
import ScrollHandler from './components/ScrollHandler/ScrollHandler'
import PageEnd from './pages/Games/components/PageEnd/PageEnd'
import IsSeven from './pages/Games/components/IsSeven/IsSeven'
import FeedTheGuy from './pages/Games/components/FeedTheGuy/FeedTheGuy'


function App() {
  // const [isCardClicked, setIsCardClicked] = useState(true);
  const isCardClicked = useSelector(store => {return store.isCardExpanded})
  const navigate = useNavigate();


  return (
    <>
    <ScrollHandler/>
    <Routes>
      <Route path='*' element={<>
        <Nav />
        <Banner />
        <CardHorizontal />
        {isCardClicked && <CardExpanded/>}
        <PageEnd />
        </>}/>
      <Route path='/Portfolio/game/isSeven' element={<IsSeven />}/>
      <Route path='/Portfolio/game/FeedTheGuy' element={<FeedTheGuy />}/>
    </Routes>
    </>
  )
}

export default App
