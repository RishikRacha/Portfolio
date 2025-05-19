import React from 'react'
import './CardsContainer.css'
import Card from '../Card/Card'

const style = {
    paddingLeft: '60px',
    paddingRight: '60px',
    position: 'relative',
    zIndex: 200,
    top: '-150px',
    height: '150px',
    background: 'linear-gradient(to bottom, rgba(190, 0, 0, 0), rgb(20, 20, 20))',
    width: '100%',
};

function CardsContainer() {
  return (
    <div style={style} className='bodyContainer'>
        <br /><br />
        <h2 >BODY OF THE APP</h2>
        <div className='cardsContainer'>
          <Card />
          <Card />
        </div>
      </div>
  )
}

export default CardsContainer