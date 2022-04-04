import React from 'react';

const SectionCard = ({img, tittle, description}) => {
    return (
        <div>
            <img 
                src={img}
                alt={tittle}
            />
            <h1>{tittle}</h1>
            <p>{description}</p>
        </div>
    );
}

export default SectionCard;