import React from 'react'

export default function BeerCard(props) {
    return (
        <div>
            <img src={props.image_url} alt=""/>
                <div className="details-header" style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
                    <div>
                        <h2>{props.name}</h2>
                        <span>{props.tagline}</span>
                    </div>
                    <div>
                        <h2>{props.attenuation_level}</h2>
                        <p><strong>{props.first_brewed}</strong></p>
                    </div>
                </div>
                <p>{props.description}</p>
                <span>{props.contributed_by}</span>

        </div>
    )
}
