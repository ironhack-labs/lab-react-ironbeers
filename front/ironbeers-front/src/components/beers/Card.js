import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({id, title, imageURL, description, contributed_by})=>{
    return(
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default Card