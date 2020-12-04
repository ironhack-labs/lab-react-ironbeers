import React from 'react'
import Navbar from '../components/Navbar'

export default function BeerCard(props) {
    return (
        <div >
            <Navbar/>
            <div className="beer-card-container">
            <div className="beer-details-card">
                <img src={props.img} alt=""/>
                <div className="name-number">
                <span className="beer-name">{props.name}</span>
                <strong className="beer-number">{props.attenuation}</strong>
                </div>
                <div className="tagline-date">
                <span className="beer-tagline">{props.tagline}</span>
                <strong className="beer-date">{props.firstBrewed}</strong>
                </div>
                <p className="beer-description">{props.description}</p>
                <strong className= "beer-creator">{props.contributed_by}</strong>
            </div>
            </div>
        </div>
    )
}
