import React from 'react';

const HomeItem = (props) =>{

    return(
        <div className = "home-item">
            <img className = "home-image "src={props.image} alt="{props.header}"/>
            <h3 className = "home-header">{props.header}</h3>
            <p className = "home-text">{props.text}</p>
        </div>
    )
}

export default HomeItem