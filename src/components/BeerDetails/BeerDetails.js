export const BeerDetails = ({
	image_url,
	description,
	name,
	attenuation_level,
	tagline,
	first_brewed,
	contributed_by
}) => {
	return (
		<>
			<div className="container">
				<section className="mx-auto my-5" style={{ maxWidth: "35rem" }}>
					<div className="card booking-card v-2 mt-2 mb-4 rounded-bottom">
						<div
							className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
							data-mdb-ripple-color="light"
						>
							<img src={image_url} className="img-fluid" alt="" />
							<a href="/">
								<div
									className="mask"
									style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
								></div>
							</a>
						</div>
						<div className="card-body">
							<div className="d-flex justify-content-between">
								<div className="d-flex flex-column align-items-start">
									<h2 className="card-title font-weight-bold">
										<a href="/">{name}</a>
									</h2>
									<h5 className="card-title text-muted">{tagline}</h5>
								</div>
								<div>
									<h3 className="card-title text-muted">{attenuation_level}</h3>
									<h5 className="card-title fw-bold">
										{first_brewed}
									</h5>
								</div>
							</div>
							<p className="card-text text-start">{description}</p>
							<h6 className="card-title text-muted my-4 d-flex">{contributed_by}</h6>
							<hr className="my-4" />
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
