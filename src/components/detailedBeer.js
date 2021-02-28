import React from 'react';


export default function detailedBeer (props) {
    const Id = props.match.params.Id
    const allBeers = props.location.state.beers;
    const dasBeer = allBeers.map((selectedBeer) => {
        if(selectedBeer._id === Id){
            return (
                <div>
                <h1>{selectedBeer.name}</h1>
                <img src={selectedBeer.image_url}></img>
                <h3>Tagline {selectedBeer.tagline}</h3>
                <h3>First Brewed:{selectedBeer.first_brewed}</h3>
                <h3>Attuention Level: {selectedBeer.attenuation_level}</h3>
                <h3>Description: {selectedBeer.description}</h3>
                <h4>Contributed by: {selectedBeer.contributed_by}</h4>
                </div>
            )
        }
    });
    return(
        <div>
          {dasBeer}
        </div>
    )
}