import React, { useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

function ListBeers() {
	const [beerList, setBeerList] = useState(null);

	useEffect(() => {
		axios
			.get('https://ih-beers-api2.herokuapp.com/beers')
			.then((response) => {
				setBeerList(response.data);
			})
			.catch((error) => {
				console.log('getBeers error: ', error);
			});
	}, []);

	if (!beerList) {
		return (
			<div className="container-fluid d-flex justify-content-center align-items-center vh-100">
				<Spinner animation="border" variant="danger" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</div>
		);
	} else {
		return (
			<>
				<h2 className="m-4">
					Discover a world of flavors and aromas as you explore our carefully
					curated list of beers. Click on a card for more details!
				</h2>
				<div className="d-flex flex-wrap align-items-center justify-content-center">
					{beerList.map((element, index) => {
						return (
							<Link
								to={`/beer/${element._id}`}
								className="text-decoration-none"
								key={'beer ' + index}
							>
								<Card
									className="m-3 container p-3 align-items-center justify-content-center"
									style={{ width: '18rem', minHeight: '25rem' }}
								>
									<div className="d-flex align-items-center row no-gutters">
										<div className="col-4">
											<Card.Img
												className="img-fluid"
												variant="top"
												src={element.image_url}
											/>
										</div>
										<div className="col-8 d-flex align-items-center">
											<Card.Body>
												<Card.Title className="fw-bold">
													{element.name}
												</Card.Title>
												<Card.Text>{element.tagline}</Card.Text>
												<Card.Text>
													<span className="fw-bold">Created by:</span>{' '}
													{element.contributed_by.split('<')[0]}
												</Card.Text>
											</Card.Body>
										</div>
									</div>
								</Card>
							</Link>
						);
					})}
				</div>
			</>
		);
	}
}

export default ListBeers;
