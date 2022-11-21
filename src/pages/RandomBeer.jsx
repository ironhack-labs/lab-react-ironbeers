import Header from '../component/Header'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


function RandomBeer() {

    const [beer, setBeer] = useState([]);
    const getBeer = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
            setBeer(response.data);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBeer()
    }, [])

  return (
    <div>
        <Header/>
        <Card className="d-flex align-items-center text-start">
        <Image fluid="true" style={{ height: '350px' }} className="d-flex align-items-center" src={beer.image_url} alt="beer" />
                    <div className="text-start ms-3 d-flex">
                        <h2 className="p-2">{beer.name}</h2>
                        <h2 className="p-2 text-secondary text-opacity-50">{beer.attenuation_level}</h2>
                    </div>
                    <div className="text-start ms-3 d-flex flex-row mb-2 ">
                        <p className="h6 text-secondary text-opacity-50 p-2">{beer.tagline}</p>
                        <p className="h6 p-2"><small>{beer.first_brewed}</small></p>
                    </div>
                    <p className="h6 text-start ms-3">{beer.description}</p>
                    <p className="h6 text-start ms-3 text-secondary text-opacity-40"><small>{beer.contributed_by}</small></p>
            </Card>
        </div>

  )
}

export default RandomBeer