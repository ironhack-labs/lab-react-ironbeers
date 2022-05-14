import { Link } from "react-router-dom";

export default function BeersList(props) {
    const { beers } = props;

    return (
        <div>
            <Link to="/">HOME</Link>
            <section>
                <h1>List Of Beers:</h1>
                {beers ?
                    beers.map(beer => {
                        return (
                            <div className="SingleBeer" key={beer._id}>
                                <img src={beer.image_url} alt={beer.name} />
                                <div>
                                <h2>{beer.name}</h2>
                                <h3>{beer.tagline}</h3>
                                <p>{beer.contributed_by}</p>
                                <Link to={`/beers/${beer._id}`}>Details</Link>
                                </div>
                            </div>
                        )
                    })
                    : <h3>Loading...</h3>
                }
            </section>
        </div>
    )
}