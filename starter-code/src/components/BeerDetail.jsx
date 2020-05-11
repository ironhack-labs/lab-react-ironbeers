import React from "react";
import beers from "../beers.json";
import { Link } from "react-router-dom";

let getBeerByccas3 = cca3 => {
    return beers.find(beer => beer.cca3 === cca3);
};
const beerDetails = props => {
    const beer = getBeerByccas3(props.match.params.cca3);
    return (
        <div>
            <h3>{beer.name.official}</h3>
            <hr />
            <h4>Capital:{beer.capital}</h4>
            <hr />
            <h5>Area: {beer.area}</h5>
            <hr />
            <h5>
                Borders:{" "}
                {beer.borders
                    .map(cca3 => getBeerByccas3(cca3))
                    .map(c => (
                        <Link to={"/" + c.cca3}> {c.name.official}</Link>
                    ))}
            </h5>
        </div>
    );
};

export default beerDetails;