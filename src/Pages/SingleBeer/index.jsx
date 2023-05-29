import axios from "axios";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Navbar from "../../Components";

function SingleBeer() {
	const [singleBeer, setSingleBeer] = useState([]);
	const { beerId } = useParams();

	useEffect(() => {
		axios
			.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
			.then((response) => {
				setSingleBeer(response.data);
	
			})
			.catch((error) => {
				console.error("Error fetching single beer:", error);
			});
	}, [beerId]);

	return (
		<div>
			<Navbar />
            {singleBeer && (
			<div>
				<div>
					<img src={singleBeer.image_url} alt="beer" />
				</div>
				<div>
					<div>
						<h3>{singleBeer.name}</h3>
						<h3>{singleBeer.attenuation_level}</h3>
					</div>
					<div>
						<h2>{singleBeer.tagline}</h2>
						<h2>{singleBeer.first_brewed}</h2>
					</div>
                    <div>
					    <p>{singleBeer.description}</p>
					    <p>{singleBeer.contributed_by}</p>
                    </div>
				</div>
			</div>
            )}
		</div>
	);
}

export default SingleBeer;
