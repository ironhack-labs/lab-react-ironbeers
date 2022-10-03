import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

function SingleBeer(){
    
    const {beerId} = useParams();

    const [singleBeer, setSingleBeer] = useState(null);

    useEffect(()=>{
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(res => res.json())
            .then(json => setSingleBeer(json))
            .catch(err => console.log(err))
    }, [])

    

    return(
        <div>
            {singleBeer ? (
                <div className='detail-page'>
                    <img src={singleBeer.image_url} alt={singleBeer.name}/>
                    <div className='detail-info'>
                        <div className='detail-line1'>
                            <h1>{singleBeer.name}</h1>
                            <h1>{singleBeer.attenuation_level}</h1>
                        </div>

                        <div className='detail-line2'>
                            <h3>{singleBeer.tagline}</h3>
                            <h4>{singleBeer.first_brewed}</h4>
                        </div>

                        <p>{singleBeer.description}</p>

                        <p>{singleBeer.contributed_by}</p>
                    </div>
                </div>
            ) : (<p>Loading..</p>)

              }
        </div>
    )
}

export default SingleBeer;