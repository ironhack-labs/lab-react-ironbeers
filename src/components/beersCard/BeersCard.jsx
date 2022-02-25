const BeersCard = ({ beerData}) => {
    return (
        <>
        <img src={beerData.image_url} alt={beerData.name} />
        <h2>{beerData.name}</h2>
        <p>{beerData.attenuation_level}</p>
        <p>{beerData.tagline}</p>
        <p>{beerData.first_brewed}</p>
        <p>{beerData.description}</p>
        <p>{beerData.contributed_by}</p>
        </>
    )
}

export default BeersCard