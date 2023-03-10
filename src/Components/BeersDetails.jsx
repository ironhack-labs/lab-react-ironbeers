// Importing the useState and useEffect hooks from the React library
import { useState, useEffect } from "react";
// Importing the Axios library for making HTTP requests
import axios from "axios";
// Importing the Header component
import Header from "./Header";
// Importing the useParams hook from the react-router-dom library
import { useParams } from "react-router-dom";

// Defining a functional component called BeerDetails
function BeerDetails() {
// Defining state variables using the useState hook
const [beer, setBeer] = useState({});
// Accessing the beerId parameter from the URL using the useParams hook
const { beerId } = useParams();

// Using the useEffect hook to fetch data from the API
useEffect(() => {
// Console log for debugging purposes
console.log("Fetching beer data...");
// Sending a GET request to the API to get the beer data with the specified ID
axios
.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
// If the request is successful, update the state with the received data
.then((response) => {
console.log("Beer data fetched successfully.", response.data);
setBeer(response.data);
})
// If there is an error, log the error to the console
.catch((error) => console.error(error));
// Adding beerId as a dependency to the useEffect hook, so it re-fetches data whenever it changes
}, [beerId]);

return (
<div>
<Header />
{beer.name && (
<div className="card">
<img
         src={beer.image_url}
         alt={beer.name}
         className="card__img"
       />
<div className="card__details">
<h1>{beer.name}</h1>
<p>{beer.tagline}</p>
<p>First brewed: {beer.first_brewed}</p>
<p>Attenuation level: {beer.attenuation_level}</p>
<p>{beer.description}</p>
<p>Contributed by: {beer.contributed_by}</p>
</div>
</div>
)}
</div>
);
}

export default BeerDetails;