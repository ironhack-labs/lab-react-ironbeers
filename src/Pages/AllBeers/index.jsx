import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../../Components";

function AllBeers() {
	const [beers, setBeers] = useState([]);

	useEffect(() => {
		axios
			.get("https://ih-beers-api2.herokuapp.com/beers")
			.then((response) => {
				setBeers(response.data);
			});
	}, []);
  
	return (
		<div>
      <Navbar />
      
			{beers.map((beer) => (
				<div key={beer._id}>
					<Link to={`/allbeers/${beer._id}`}>
						<img src={`${beer.image_url}`} alt="" width={"50px"} />
						<h3>{beer.name}</h3>
					</Link>
					<p>{beer.description}</p>
					<p>Created by {beer.contributed_by}</p>
				</div>
			))}
		</div>
	);
}

export default AllBeers;
