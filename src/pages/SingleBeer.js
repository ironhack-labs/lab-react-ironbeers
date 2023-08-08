import Header from "../components/Header.js";
import { useParams } from 'react-router-dom'

const SingleBeer = ({beers}) => {

    const { beerId } = useParams();
    console.log(beerId)

    const foundBeer = beers.find((oneBeer) => { 
        return oneBeer._id === beerId;
      });

    return (
            <>
                            <Header />
                            <img src={foundBeer.image_url} width="50px" />
                                    <h3>{foundBeer.name}</h3> 
                                    <h4>{foundBeer.tagline}</h4> 
                                    <p>{foundBeer.first_brewed}</p>
                                    <p>{foundBeer.attenuation_level}</p>
                                    <p>{foundBeer.description}</p>
                                    <p>Created by: {foundBeer.contributed_by}</p> 
            </>
   
    )
}

export default SingleBeer;