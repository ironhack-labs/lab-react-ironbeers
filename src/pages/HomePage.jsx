import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<Link to={"/Beers"}>
			<button className="btn btn-outline">All Beers</button>
		</Link>
	);
}

export default HomePage;
