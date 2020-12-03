import React from 'react'
import { Link } from 'react-router-dom'


const BeerCard = ({ title, image, link }) => {
    
    return (    
        <section >
            <img src={image} alt={title} />
                <Link to={link}><h2>{title}</h2></Link>
        </section>
    )
}

export default BeerCard