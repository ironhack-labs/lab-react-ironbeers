import React from 'react'
import './../styles/OneBeer.css'

export default function OneBeer(props) {

    const {image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} =props.beer ;

    return (
        <div className="OneBeer_container">
            <img src={image_url} alt="" className="OneBeer__img"/>
            <div>
                <div className="upper">{name}</div>
                <div className="upper grey">{attenuation_level}</div>
            </div>
            <div>
                <div className="lower grey">{tagline}</div>
                <div className="lower"><strong>{first_brewed}</strong></div>
            </div>
            <article>
                {description}
            </article>
            <p className="lower grey">{contributed_by}</p>
        </div>
    )
}
