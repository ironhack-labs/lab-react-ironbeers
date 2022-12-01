import "./BeerInfo.css";

const BeerInfo = ({ beer }) => {
	return (
		<>
			<div className="container BeerInfo">
				<div className="row justify-content-center my-3 text-start">
					<img className="py-4" src={beer.image_url} alt="" />
					<div className="d-flex py-2 justify-content-between">
						<div className=" text-start">
							<h2>{beer.name}</h2>
							<h5 className="text-secondary fw-light">{beer.tagline}</h5>
						</div>
						<div className="text-end">
							<h4 className="text-secondary">{beer.attenuation_level}</h4>
							<p>
								<b>{beer.first_brewed}</b>
							</p>
						</div>
					</div>
					<p className="fst-italic p-4">{beer.description}</p>
					<p className="text-secondary">
						<b>{beer.contributed_by}</b>
					</p>
				</div>
			</div>
		</>
	);
};

export default BeerInfo;
