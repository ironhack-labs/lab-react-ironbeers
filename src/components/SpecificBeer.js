
const SpecificBeer = ({beer}) => {
    return (
        <div style={{ width: "90vw", margin: "auto", marginTop: 40,}}>
        <img style={{height: "40vh"}} src={beer.image_url} alt="beer" />
        <div style={{display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <h2>{beer.name}</h2>
            <h3>{beer.attenuation_level}</h3>
        </div>
        <div style={{display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <p>{beer.tagline}</p>
            <p><strong>{beer.first_brewed}</strong></p>
        </div>

        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
    </div>
    )
}

export default SpecificBeer