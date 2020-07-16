import React from "react"

import { Link } from 'react-router-dom'

const MainPageSection = ({ title, imgUrl, link }) => {
    
    return (    
        <section>
            <img src={imgUrl} alt={title} />
            <Link to={`${link}`}><h3>{title}</h3></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est nihil expedita recusandae eligendi. Ab, consequuntur. Adipisci, unde cumque fuga, vel saepe ut sint, ratione enim numquam itaque praesentium aspernatur!</p>
        </section>
    )
}

export default MainPageSection