export const Home = () => {
	return (
		<main role="main">
			<div className="jumbotron">
				<div className="container">
					<h1 className="display-3">Iron Beers</h1>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<h2>All Beers</h2>
						<p>
							<a className="btn btn-secondary" href="/beers" role="button">
								Get all »
							</a>
						</p>
					</div>
					<div className="col-md-4">
						<h2>Random Beer</h2>
						<p>
							<a className="btn btn-secondary" href="/random-beer" role="button">
								Get random »
							</a>
						</p>
					</div>
					<div className="col-md-4">
						<h2>New Beer</h2>
						<p>
							<a className="btn btn-secondary" href="/new-beer" role="button">
							Create new »
							</a>
						</p>
					</div>
				</div>

				<hr />
			</div>
		</main>
	);
};
