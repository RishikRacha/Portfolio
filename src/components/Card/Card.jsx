import React from 'react'
import "./Card.css"

function Card({name, image, description, index})  {
  return (
    <div className='cardContainer' style={{}}>
        <img src={image} alt={name} />
        <div className='cardText'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias error quidem. Quasi veritatis ex minima nesciunt dicta, repellat fugit.</p>
        </div>
    </div>
  )
}

export default Card
// style={{backgroundImage:`url(${image})`}}