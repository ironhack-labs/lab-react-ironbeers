
const SingleBeerDisplay = ({beer}) => {
  return (
    <div className="singleBeer">
            <div className="singleBeerImg">
                <img src={beer.image_url} alt="altImgBeer"/>
            </div>
            <div className="infoHeader">
                <h1>{beer.name}</h1>
                <h2>{beer.attenuation_level}</h2>
            </div>
            <div className="infoTagline">
                <h3>{beer.tagline}</h3>
                <h3>{beer.first_brewed}</h3>
            </div>
            
            <article>{beer.description}</article>
            <h5>{beer.contributed_by}</h5>
        </div>
  )
}

export default SingleBeerDisplay