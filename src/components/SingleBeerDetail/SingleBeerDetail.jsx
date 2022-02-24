const SingleBeerDetail = ({ beerDetail }) => {
    return (
        <>
            <img src={beerDetail.image_url} alt={beerDetail.name} />
            <h1>Beer {beerDetail.name}</h1>
            <p>{beerDetail.attenuation_level}</p>
            <p>{beerDetail.tagline}</p>
            <p><strong>{beerDetail.first_brewed}</strong></p>
            <p>{beerDetail.description}</p>
            <p>{beerDetail.contributed_by}</p>
        </>
    )
}

export default SingleBeerDetail