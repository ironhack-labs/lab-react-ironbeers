import { Link } from "react-router-dom";
import "./BeersPage.css";
import { useEffect, useState } from "react";
import beersService from "../../services/beer.service";
import axios from "axios";

const BeersPage = () => {
	const [allBeers, setAllBeers] = useState([]);
	const [query, setQuery] = useState("");

	const loadBeers = () => {
		beersService
			.getBeers()
			.then(({ data }) => setAllBeers(data))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		loadBeers();
	}, []);

	/* useEffect(() => {
		beersService
			.getBeersByQuery(query)
			.then((response) => setAllBeers(response.data))
			.catch((err) => console.log(err));
	}, [query]); */

	useEffect(() => {
		axios
			.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
			.then((response) => {
				setAllBeers(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, [query]);

	const handleQuery = (e) => {
		setQuery(e.target.value);
	};

	return (
		<div className="container BeerPage">
			<div className="row my-3">
				<input type="text" name="" id="" value={query} onChange={handleQuery} />
				{allBeers.map((elm) => {
					return (
						<Link className="col-md-6 gap-5 beersLink m-0 p-0" key={elm._id} to={`/beers/${elm._id}`}>
							<div className="p-4">
								<div className="imgContainer">
									<img src={elm.image_url} alt="" />
								</div>
								<div>
									<h2>{elm.name}</h2>
									<h4 className="text-secondary">{elm.tagline}</h4>
									<p>
										<b>Created by:</b> {elm.contributed_by.split(" <")[0]}
									</p>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default BeersPage;
