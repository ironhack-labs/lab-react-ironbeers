import React from 'react';
import Header from '../components/Header';

export const DisplayOneBeer = ({ beer }) => {
    return (
        <div>
            <Header />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1>Beer detail</h1>
                <img
                    style={{ width: "100px" }}
                    src={beer.image_url}
                    alt=""
                />
                <div style={{display: "flex", justifyContent:"space-between"}}>
                    <p style={{marginRight:"20px", fontSize:"30px"}}>{beer.name}</p>
                    <p style={{color:"grey", fontSize:"30px"}}>{beer.attenuation_level}</p>
                </div>
                <div style={{display: "flex", justifyContent:"space-between"}}>
                    <p style={{marginRight:"20px", color:"grey"}}>{beer.tagline}</p>
                    <p style={{fontWeight:"bold"}}>{beer.first_brewed}</p>
                </div>

                <p style={{maxWidth:"600px"}}>{beer.description}</p>
                <p style={{fontWeight:"bold", color:"grey"}}>{beer.contributed_by}</p>
            </div>
        </div>
    )
}

export default DisplayOneBeer