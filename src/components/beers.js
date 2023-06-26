import axios from 'axios';
import Header from './header';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Beers() {
	const [beersArr, setBeers] = useState(null);
	const baseURL = 'https://ih-beers-api2.herokuapp.com/beers';
	useEffect(() => beerList(), []);

	const beerList = () => {
		axios
			.get(`${baseURL}`)
			.then((response) => {
				console.log(response.data);
				setBeers(response.data);
			})
			.catch((e) => console.log(e));
	};
	return (
		<>
			<Header />
			{beersArr ? (
				beersArr.map((beerItem) => {
					return (
						<div key={beerItem._id}>
							{beerItem.image_url && (
								<img src={beerItem.image_url} alt={beerItem.name}></img>
							)}
							<h2>{beerItem.name}</h2>
							<p>{beerItem.tagline}</p>
							<p>Contributed by: {beerItem.contributed_by}</p>
							<Link to={`/beers/${beerItem._id}`}>More details</Link>
						</div>
					);
				})
			) : (
				<p>Wait a bit, loading beers!</p>
			)}
		</>
	);
}

export default Beers;
