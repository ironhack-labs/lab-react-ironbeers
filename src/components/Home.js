import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="flex-wrap d-flex justify-content-around align-items-center vh-100">
			<Card className="bg-danger-subtle bg-danger-subtle bg-danger-subtle m-2">
				<Link to={'/beer/list'} className="text-decoration-none">
					<Card.Img
						className="img-fluid"
						variant="top"
						src="/assets/beers.png"
					/>
					<Card.Body className="text-center" style={{ color: 'black' }}>
						<Card.Title className="fs-3 fw-bold">List of beers</Card.Title>
						<Card.Text>
							Discover a world of flavors and aromas as you explore our
							carefully curated list of beers.
						</Card.Text>
					</Card.Body>
				</Link>
			</Card>

			<Card className="bg-danger-subtle m-2">
				<Link to={'/beer/random'} className="text-decoration-none">
					<Card.Img
						className="img-fluid"
						variant="top"
						src="/assets/random-beer.png"
					/>
					<Card.Body style={{ color: 'black' }}>
						<Card.Title className="fs-3 fw-bold">Add a Beer</Card.Title>
						<Card.Text>
							Add your unique creation to our esteemed database.
						</Card.Text>
					</Card.Body>
				</Link>
			</Card>

			<Card className="bg-danger-subtle m-2">
				<Link to={'/beer/new'} className="text-decoration-none">
					<Card.Img
						className="img-fluid"
						variant="top"
						src="/assets/new-beer.png"
					/>
					<Card.Body style={{ color: 'black' }}>
						<Card.Title className="fs-3 fw-bold">Random Beer</Card.Title>
						<Card.Text>
							Let chance lead you to your new favorite beer!
						</Card.Text>
					</Card.Body>
				</Link>
			</Card>
		</div>
	);
}

export default Home;
