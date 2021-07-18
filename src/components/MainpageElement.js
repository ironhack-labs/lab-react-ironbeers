import React from 'react';
import { Link } from "react-router-dom";

function MainpageElement({ elementData: {title, description, image, link}}) {
    return (
        <Link style={{ textDecoration: "none" }} to={`${link}`}>   
            <div className="mainpage-element-container">
                <img src={image} alt={title}></img>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </Link>
    )
}

export default MainpageElement;
