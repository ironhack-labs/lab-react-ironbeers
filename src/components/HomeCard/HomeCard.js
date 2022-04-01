import React from 'react';
import { Link } from 'react-router-dom';

const Homecard = ({img, title, description, link}) => {
    return (
        <div id='HomeCard'>
            <img src={img} alt={title} />
            <div className='description'>
                <h2><Link to={link}>{title}</Link></h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Homecard;
