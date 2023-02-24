import {useParams} from "react-router-dom"

function BeerDetails({beers}) {
    const {id} =useParams()

    let selectedBeer = beers.find(beer => beer._id === id)
    console.log("ESTA ES LA SELECTED:", selectedBeer.name)

    return ( 
        <div>
            <img style={{height:"200px"}} src={selectedBeer.image_url} alt="alta birra"/>
                <h3>{selectedBeer.name}</h3>
                <h3>{selectedBeer.attenuation_level}</h3>
                <h4>{selectedBeer.tagline}</h4>
                <h4>{selectedBeer.first_brewed}</h4>
                <p>{selectedBeer.description}</p>
                <h5>{selectedBeer.contributed_by}</h5> 

        </div>
     );
}

export default BeerDetails;