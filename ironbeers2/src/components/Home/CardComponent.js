import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'antd'
 

function CardComponent({title, description, url,img}) {
  return (
    <div>
      <Link to ={url}>
      <Card >
       <img src={img} alt="beerImage"/>
       <h2>{title}</h2>
       <p>{description}</p>
      </Card>
      </Link>
    </div>
  )
}

export default CardComponent