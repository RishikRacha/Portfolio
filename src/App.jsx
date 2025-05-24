import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import CardsContainer from './components/CardsContainer/CardsContainer'
import CardHorizontal from './components/CardHorizontal/CardHorizontal'

function App() {
  const [count, setCount] = useState(0);
  

  

  return (
    <>
      <Nav />
      <Banner />

      {/* <CardsContainer /> */}
      <CardHorizontal />

    </>
  )
}

export default App
