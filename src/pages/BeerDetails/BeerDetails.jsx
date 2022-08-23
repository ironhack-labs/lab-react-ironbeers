import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios';

function BeerDetails() {

    const [beer, setBeer] = useState(null);

    const {id} = useParams();

    const getBeer = async () => {
        try {
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            setBeer(response.data)       
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBeer()
    }, [])
    

  return (
    <div>
                <Link to='/'><img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="Home" /></Link>
    {beer &&(
        <div>
        <img src={beer.image_url} alt="beer image" className='beer-img'/>
        <h1>{beer.name}</h1>
        <h1>{beer.attenuation_level}</h1>
        <h3>{beer.tagline}</h3>
        <h3>{beer.first_brewed}</h3>
        <h5>{beer.description}</h5>
        <h3>{beer.contributed_by}</h3>
        </div>
    )}

    </div>
  )
}

export default BeerDetails