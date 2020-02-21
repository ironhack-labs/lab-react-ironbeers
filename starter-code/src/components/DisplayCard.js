import React from 'react'

const DisplayCard = props => {
    return (
        <div className="home-page">
            <img src={props.image} alt={props.title}/>
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
        </div>
    )
}

export default DisplayCard
