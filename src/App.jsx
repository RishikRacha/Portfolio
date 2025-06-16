import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import CardsContainer from './components/CardsContainer/CardsContainer'
import CardHorizontal from './components/CardHorizontal/CardHorizontal'
import CardExpanded from './components/CardExpanded/CardExpanded'

function App() {
  const [isCardClicked, setIsCardClicked] = useState(false);

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
