import React from "react";

const Beers = ({ beers }) => {
    return (
    <div>
        {beers.map((beer) => {
            return(
            <div key={beer._id}>
                <img src={beer.image_url} alt="" />
                <h3>{beer.name}</h3>
                <h3>{beer.tagline}</h3>
            </div>
            );
        })}
    </div>
    );
};

export default Beers;