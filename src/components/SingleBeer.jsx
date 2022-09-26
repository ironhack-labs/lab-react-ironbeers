
function SingleBeer({ beer }) {

    console.log(beer)
    return (
        <div className="container-fluid all-beers" style={{ width: '50%' }}>
            <img style={{ width: '20%' }} className="p-4" src={beer.image_url} alt="" />
            <div>
                <h2>{beer.name}</h2>
                <span className="text-muted h5">{beer.tagline}</span>
                <span className="ml-4">{beer.first_brewed}</span>
                <p>{beer.description}</p>

            </div>
        </div>


    )
}

export default SingleBeer