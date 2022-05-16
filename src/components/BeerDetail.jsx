function BeerDetail(props){
    const {
      image_url,
      name,
      attenuation_level,
      tagline,
      first_brewed,
      description,
      contributed_by,
    } = props.beer;

    return (
        <>
        <img src={image_url} alt="" />
        <h2>{name}</h2>
        <h3>{attenuation_level}</h3>

        <h3>{tagline}</h3>
        <h3>{first_brewed}</h3>

        <p>{description}</p>
        <p>{contributed_by}</p>
        
        </>
    )
}

export default BeerDetail