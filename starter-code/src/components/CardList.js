import React from "react";
import BeerCard from "./BeerCard";

export default function CardList(props) {
    const style = {
        height: "100vh",
        overflow: "scroll"
    };
    console.log(props.beers);
    return(
        <div style={style}>
            {props.beers.map(beer => (
                <BeerCard {...beer} />
            ))}
        </div>
    )
}