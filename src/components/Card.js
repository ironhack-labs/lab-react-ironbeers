import React from 'react';
import { NavLink } from 'react-router-dom';


function Card(props){
    return(
        <div>
            <NavLink to={props.link}>
                <img src={props.image} alt='beer'/>
            </NavLink>
            <h3>{props.title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate orci elit, nec porta leo pharetra et.</p>
        </div>
    )
}

export default Card;