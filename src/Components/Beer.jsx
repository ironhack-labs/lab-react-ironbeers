import './Beer.css'

import React from 'react'

export default function Beer(props) {
    return (
        <div className="single-beer-container">
                <img src={props.state.data.image_url} />
                   <div className="single-beer-box">
                        <h1>{props.state.data.name}</h1>
                        <h1>{props.state.data.attenuation_level}</h1>
                    </div>
                    <div className="single-beer-box">
                    <h2>{props.state.data.tagline}</h2>
                    <h3>{props.state.data.first_brewed}</h3>
            
                        </div>
                
                
                <p>{props.state.data.description}</p>
                <p>{props.state.data.countributed_by}</p>
             </div>
    )
}
