import { useParams } from "react-router-dom"

const BeerDetails = (props) => {

    const {id} = useParams()
    const foundBeer = props.beers.find(element => element._id === id)

    console.log(props)
    return ( 
        <>
         <h2>{foundBeer.name}</h2>
         <img src={foundBeer.image_url} alt={foundBeer.name}/>
         <p>{foundBeer.tagline}</p>
         <p>{foundBeer.first_brewed}</p>
         <p>{foundBeer.attenuation_level}</p>
         <p>{foundBeer.description}</p>
         <p>{foundBeer.contributed_by}</p>
        </>
    )

}

export default BeerDetails