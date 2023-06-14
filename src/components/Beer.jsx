import { useParams } from 'react-router-dom'

function Beer({ beers }) {
	const params = useParams()

	console.log(params)
	console.log(beers)
	const foundBeer = beers.find((beer) => beer._id === params.beerId)
	return (
		<div>
			<h1>{foundBeer.name}</h1>
			<h2>{foundBeer.tagline}</h2>
			<img src={foundBeer.image_url} alt={foundBeer.name} />
			<p>
				<strong>first brewed:</strong>
				{foundBeer.first_brewed}
			</p>
			<p>
				<strong>attenuation level:</strong>
				{foundBeer.attenuation_level}
			</p>
			<p>
				<strong>Description:</strong>
				{foundBeer.description}
			</p>
			<p>
				<strong>contributed by:</strong>
				{foundBeer.contributed_by}
			</p>
		</div>
	)
}

export default Beer
