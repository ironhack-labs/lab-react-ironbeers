import React from 'react';

const HomeCard = ({image_url, link, title, description}) => {
        return (
            <div>
                <img src={image_url} width="300px" alt=''/>
                <h1><a href={link}>{title}</a></h1>
                <p>{description}</p>
            </div>
        )
}

export default HomeCard;