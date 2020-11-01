import React from 'react'

export default function BeerInfo(props) {
    const { beer } = props;

    return (
        <div>
            <div style={{ display: "flex", flexDirection:"column", alignItems:"center" }}>
                <img src={beer.image_url} alt="" style={{ height: 250, textAlign: "center" }} />
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
            </div>
            <p><b>First brewed: </b> {beer.first_brewed}</p>
            <p><b>Attenuation level: </b> {beer.attenuation_level}</p>
            <p><b>Description: </b><br/> {beer.description}</p>
            <p><b>Contributed by: </b><br/>{beer.contributed_by}</p>
        </div>
    )
}
