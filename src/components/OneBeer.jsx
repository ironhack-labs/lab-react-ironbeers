import React from 'react'

export default function OneBeer(props) {

    const {image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} =props.beer ;

    return (
        <div>
            <img src={image_url} alt=""/>
            <div>
                <div>{name}</div>
                <div>{attenuation_level}</div>
            </div>
            <div>
                <div>{tagline}</div>
                <div>{first_brewed}</div>
            </div>
            <article>
                {description}
            </article>
            <p>contributed_by</p>
        </div>
    )
}
