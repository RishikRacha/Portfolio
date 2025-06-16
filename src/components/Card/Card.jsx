import React from 'react'
import "./Card.css"
import { useNavigate } from 'react-router-dom'
import CardExpanded from '../CardExpanded/CardExpanded';

function Card({name, image, description, path})  {

  function clickHandler() {

  }

  return (
    <div className='cardContainer hoverContainer' >
        <img src={image} alt={name} />
        <div className='cardText'>
            <p>{description}</p>
        </div>


    </div>
  )
}

export default Card
// style={{backgroundImage:`url(${image})`}}