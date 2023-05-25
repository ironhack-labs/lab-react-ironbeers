import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BeersDetails = () => {
    const { id } = useParams()
    const [beer, setBeer] = useState([])

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(response => response.json())
            .then(data => setBeer(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='beersdetails-container'>
            <div className='beersdetails-card'>
                <img src={beer.image_url} width="80px" alt="" />
                <div>
                    <div className='flex justify-space'>
                        <p>Name: {beer.name}</p>
                        <p>{beer.attenuation_level} </p>
                    </div>
                    <div className='flex justify-space'>
                        <p>Tagline: {beer.tagline} </p>
                        <p>{beer.first_brewed} </p>
                    </div>
                    <p>Description: {beer.description}</p>
                    <p>Contribution: {beer.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}

export default BeersDetails