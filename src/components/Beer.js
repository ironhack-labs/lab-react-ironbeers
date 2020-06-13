import React from 'react'

function Beer (props){
    return(
        <div>
            <img src={props.singleBeer.image_url} />
            <h4>{props.singleBeer.name}</h4>
            <p>{props.singleBeer.tagline}</p>
            Created by:{props.singleBeer.contributed_by}
        </div>
    )
}

export default Beer