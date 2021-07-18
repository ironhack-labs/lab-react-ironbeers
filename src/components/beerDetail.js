// import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import useFetch from "react-fetch-hook";

// //question: here I get error message data.find (line 21) is not a function

// const fetchData = () => {
//     return axios.get("https://ih-beers-api2.herokuapp.com/beers")
//     .then((response) => console.log(response.data));}

// const data = fetchData();
// console.log('checking if data is received:', data);


// export default function beerDetail(props) {
//     console.log('checking props:', props);
//     const { params } = props.match;
//     console.log('checking if params:', params);

//     const beerToShow = data.find(elm => elm._id === params._id);
//     console.log('checking if beer is found:', beerToShow.name.common);


//     return (
//         <div>
//             <header> <Link to="/">Home</Link></header>
//                 <img src={beerToShow.image_url} />
//                 <p>{beerToShow.name}</p>
//                 <p>{beerToShow.tagline}</p>
//                 <p>{beerToShow.first_brewed}</p>
//                 <p>{beerToShow.attenuation_level}</p>
//                 <p>{beerToShow.description}</p>
//                 <p>{beerToShow.contributed_by}</p>

//         </div>
//     )
// }

