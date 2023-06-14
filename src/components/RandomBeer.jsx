function Beer({ randomBeer }) {
	return (
		<div>
			<h1>{randomBeer.name}</h1>
			<h2>{randomBeer.tagline}</h2>
			<img src={randomBeer.image_url} alt={randomBeer.name} />
			<p>
				<strong>first brewed:</strong>
				{randomBeer.first_brewed}
			</p>
			<p>
				<strong>attenuation level:</strong>
				{randomBeer.attenuation_level}
			</p>
			<p>
				<strong>Description:</strong>
				{randomBeer.description}
			</p>
			<p>
				<strong>contributed by:</strong>
				{randomBeer.contributed_by}
			</p>
		</div>
	)
}

export default Beer
