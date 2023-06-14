import { Link } from 'react-router-dom'

function Beers(props) {
	console.log(props.beers)

	return (
		<div>
			<h1>Beers</h1>

			{props.beers.map((beer) => {
				return (
					<div key={beer._id}>
						<img src={beer.image_url} alt={beer.name} width="100" />
						<h2>{beer.name}</h2>
						<p>{beer.tagline}</p>
						<small>{beer.contributed_by}</small>
						<Link to={`/beers/${beer._id}`}>Details</Link>
					</div>
				)
			})}
		</div>
	)
}

export default Beers
