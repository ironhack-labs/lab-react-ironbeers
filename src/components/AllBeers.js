import './allBeers.css'

const AllBeers = ((props) => {
    console.log(props)
    return (
        <div className='all-beers'>
            <h1>All of our Beers!</h1>
            <div className='all-beers-container'>
                {props.beers.length ? props.beers.map( (beer) => {
                    return (
                    <div className='beer-container'>
                        <div className='beer-left'>
                        <   h3>{beer.name}</h3>
                        <p><em>{beer.tagline}</em></p>
                        <h4>First brewed: {beer.first_brewed}</h4>
                        <h4>Contributed by: {beer.contributed_by}</h4>
                        <a href={`/beers/${beer._id}`}>More Details</a>
                        </div>
                        <div className='beer-right'>
                            <img src={beer.image_url}/>
                        </div>
                    </div>)
                }) : 'Loading our delicious beers...'}
            </div>
        </div>
    )
})

export default AllBeers