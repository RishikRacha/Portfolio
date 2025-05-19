import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import CardsContainer from './components/CardsContainer/CardsContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Banner />

      <CardsContainer />


    </>
  )
}

export default App
