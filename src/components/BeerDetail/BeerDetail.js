import "./BeerDetail.css";

import { fetchBeerDetail, fetchRandomBeer } from "../../services/services";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BeerDetail() {
	const [beer, setBeers] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			fetchBeerDetail(id).then((beers) => {
				setBeers(beers.data);
			});
		} else {
			fetchRandomBeer().then((beers) => {
				setBeers(beers.data);
			});
		}
	}, [id]);

	return (
		<div>
			{beer ? (
				<>
					<div className="Beer-cont">
						<div className="Beer-img">
							<img src={beer.image_url} alt={beer.name} />
						</div>
						<div className="Beer-cont-info">
							<h2 className="title">{beer.name} <p className="tag">{beer.tagline}</p></h2>
							<p className="level"> {beer.attenuation_level}<p className="date">{beer.first_brewed}</p></p>
                            
                        </div>
							
                        <div className="otherInfo">   
                            <p className="desc">{beer.description}</p>
							<p className="created">
								<strong>Created by: </strong>
								{beer.contributed_by}
							</p>
                        </div>

					</div>
				</>
			) : (
				<p>Loading beer details...</p>
			)}
		</div>
	);
}
