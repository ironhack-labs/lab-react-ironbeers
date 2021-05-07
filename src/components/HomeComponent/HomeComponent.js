import React from 'react'

export default function HomeComponent({image, title, description}) {
    return (
        <article className="home-component-box">
            <img src={image} alt=""></img>
            <h1>{title}</h1>
            <p>{description}</p>            
        </article>
    )
}
