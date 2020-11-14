import React from 'react'
import './Beer.css'


function Beer({eachBeer}) {
    return (
        
            <div className="beer" key={eachBeer.id}>
                <div className="imgBeer">
                  <img src={eachBeer.image_url} alt="eachBeer" />
                </div>
                <div className="textBeer">
                  <h4>{eachBeer.name}</h4>
                  <p className="greyText">{eachBeer.tagline}</p>
                  <p className="smallText"><strong>Contributed by:</strong> {eachBeer.contributed_by}</p>
                 
                </div>
              </div>
        
    )
}
export default Beer