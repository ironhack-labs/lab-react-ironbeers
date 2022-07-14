function BeerCard({
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by
}) {
   
    return (
        <>
            <img src={image_url} alt={name} />
            <h1>{name}</h1>
            <h5>{tagline}</h5>
            <p>{first_brewed}</p>
            <p>{attenuation_level}</p>
            <p>{description}</p>
            <p>{contributed_by}</p>
        </>
    )
}

export default BeerCard;