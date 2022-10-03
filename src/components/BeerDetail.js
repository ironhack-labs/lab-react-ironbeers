import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
import Header from './Header'

const BeerDetail = () => {
    const [singleBeer,setSingleBeer] = useState([])
    const {beerId} = useParams()
    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(res => res.json())
            .then(json => setSingleBeer(json))
            .catch(err => console.log('Error fetching single beer:', err))
    }, [beerId])
    return (
        <div>
            <Header />
            <div className='detail'>
                <img className='single-beer-image' src={singleBeer.image_url} alt='beer' />
                <div className='beer-row'>
                <div className='beer-col'>
                <h2>{singleBeer.name}</h2>
                <h4 style={{color: '#959595'}}>{singleBeer.tagline}</h4>
                </div>
                <div>
                <h3 style={{color: '#959595'}}>{singleBeer.attenuation_level}</h3>
                <h4>{singleBeer.first_brewed}</h4>
                </div>
                </div>
                <p>{singleBeer.description}</p>
                <h6 style={{color: '#959595'}}>{singleBeer.contributed_by}</h6>
            </div>
        </div>
    )
}

export default BeerDetail