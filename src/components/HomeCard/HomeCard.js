import React from 'react';

const Homecard = ({img, title, description}) => {
    return (
        <div>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Homecard;
