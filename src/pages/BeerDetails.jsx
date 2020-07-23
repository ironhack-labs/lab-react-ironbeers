import React, {Component} from "react";
// import "../beer_card.css";
// import {Link} from "react-router-dom";
import ironbeersApi from "../api/apiHandler";

async function getBeerDetails(beerId) {
   const apiRes = await ironbeersApi.getBeerDetails(beerId);
   console.log(apiRes);
   return apiRes.data;
}

export default function BeerDetails(props) {
    getBeerDetails()
    return (
        <React.Fragment>
        <h2>Beer details</h2>

        </React.Fragment>
    )
}