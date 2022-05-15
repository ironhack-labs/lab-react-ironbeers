import { Link } from "react-router-dom";



function Beers(props) {

    const beersList = props.beers

    return (
        <div>
            <header className="home-return">
                <Link to='/'>Home</Link>
            </header>
            <div className="beers">
                <h1>List of beers</h1>
                {beersList.map((beer) => (
                        <div className="beer-preview" key={beer._id}>
                        <img src={beer.image_url} alt={beer.name} />
                        <h3>{beer.name}</h3>
                        <h2>{beer.tagline}</h2>
                        <h2>Contributed by {beer.contributed_by}</h2>
                        <Link to={`/${beer._id}`}>Get details</Link>
                        </div>


                ))}
            
            </div>
        </div>
    )
}

export default Beers;