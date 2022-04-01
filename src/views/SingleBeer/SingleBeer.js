import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const SingleBeer = ({ beers }) => {
    const { id } = useParams()
    const [beer, setBeer] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (beers) {
            setLoading(false)
        }
    }, [beers])

    useEffect(() => {
        const beerFound = beers.find(beer => beer._id === id)
        setBeer(beerFound)
    }, [])

    return (
        <div className="container">
            <h1>Details</h1>
            {beer ?
                (
                    <div className="" key={beer._id}>
                        <div className="">
                            <img className="" src={beer.image_url} alt={beer.name} />
                        </div>
                        <p>EL RESTO</p>
                    </div>
                ) :
                loading }
        </div>
  
    );
};

export default SingleBeer;