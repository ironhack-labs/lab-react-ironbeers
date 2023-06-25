import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function BeerDetails() {
	const { id } = useParams();
	const [beer, setBeer] = useState([]);

	useEffect(() => {
		axios
			.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
			.then((response) => {
				console.log(response.data);
				setBeer(response.data);
			})
			.catch((error) => {
				console.log('getBeers error: ', error);
			});
	}, []);

	return (
		<>
			<div className="d-flex flex-wrap align-items-center justify-content-center">
				<Card
					className="m-3 container p-3 align-items-center justify-content-center"
					style={{ width: '18rem', minHeight: '18rem' }}
				>
					<Card.Img className="img-fluid" variant="top" src={beer.image_url} />
					<Card.Body>
						<Card.Title className="fw-bold">{beer.name}</Card.Title>
						<Card.Text>{beer.tagline}</Card.Text>
						<Card.Text>
							<span className="fw-bold">First Brewed:</span> {beer.first_brewed}
						</Card.Text>
						<Card.Text>
							<span className="fw-bold">Attenuation Level:</span>{' '}
							{beer.attenuation_level}
						</Card.Text>
						<Card.Text>{beer.description}</Card.Text>
						<Card.Text>
							<span className="fw-bold">Created by:</span>{' '}
							{beer.contributed_by.split('<')[0]}
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</>
	);
}

export default BeerDetails;
