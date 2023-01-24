import { useParams } from "react-router-dom"
import './BeerDetails.css'


function BeerDetails(props){
    const {beers, setBeers} = props
    const beerId = useParams().beerId
    console.log("here" + beerId)
    console.log(beers)
    const selectedBeer = beers.filter(beer=>{
        return beer._id === beerId
    })
    console.log(selectedBeer[0])


    return(
        <div className="centered">
            <img className="smaller" src={selectedBeer[0].image_url}/>
            <div className="flexing">
                <h1>{selectedBeer[0].name}</h1>
                <p className="big">{selectedBeer[0].attenuation_level}</p>
            </div>
            <div className="flexing">
                <h2 className="tagline2">{selectedBeer[0].tagline}</h2>
                <h3 className="small-font">{selectedBeer[0].first_brewed}</h3>
            </div>
            <p style={{textAlign:"left", fontWeight:"bold"}}>{selectedBeer[0].description}</p>
            <p style={{textAlign:"left", fontStyle:"italic"}}>{selectedBeer[0].contributed_by}</p>
        </div>
    )
}

export default BeerDetails