import React from 'react'

function OneBeer({ beer }) {
    return (    
            <div className="tl bg-light-blue br3 pa3 ma2 dib bw2 grow shadow-5">
                <img src={beer.image_url} alt="beer" height="100px"/>
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
               <p> Created by:{beer.contributed_by}</p>
            </div>
    )
}

export default OneBeer 
