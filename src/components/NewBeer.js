// import React, { useState} from 'react';
// import axios from 'axios';
// import Nav from './components/Nav';
// import { Link } from 'react-router-dom';



// const NewBeer = () => {
//     const [newBeer, setNewBeer] = useState([])

//     useEffect(() => {
//         axios.get("https://ih-beers-api2.herokuapp.com/beers")
//             .then((beersResults) => {
//                 console.log(beersResults)
//                 setNewBeer(beersResults.data)
//             })
//             .catch((err) => { console.error(err) })
//     }, [])

//     return (
//         <div>
//             <Nav />
//             <h1>ALL Beers </h1>
//             <div>
//                 {newBeer.map((beerItem) => {
//                     return (
//                         <div key={beerItem._id}>
//                             <img src={beerItem.image_url} alt="beer" />
//                             <Link to={`/beer/${beerItem._id}`}><h2> {beerItem.name} </h2></Link>
//                             <p> {beerItem.tagline} </p>
//                             <p> {beerItem.contributed_by} </p>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )

//     export default NewBeer;
