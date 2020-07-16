import React from "react"

import Container from 'react-bootstrap/Container'

import "./MainPageSection.css"

import { Link } from 'react-router-dom'

const MainPageSection = ({ title, imgUrl, link }) => {
    
    return (    
        <section className="main-page">
            <img src={imgUrl} alt={title} />
            <Container>
                <Link to={`${link}`}><h3>{title}</h3></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est nihil expedita recusandae eligendi. Ab, consequuntur. Adipisci, unde cumque fuga, vel saepe ut sint, ratione enim numquam itaque praesentium aspernatur!</p>
            </Container>
        </section>
    )
}

export default MainPageSection