import {useState,useEffect} from 'react'
import Header from './Header'

const RandomBeer = () => {
    const [ranBeer,setRanBeer] = useState([])
    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(res => res.json())
            .then(json => setRanBeer(json))
            .catch(err => console.log('Error fetching random beer', err))
    }, [])
    return (
        <div>
        <Header />
        <div className='detail'>
            <img className='single-beer-image' src={ranBeer.image_url} alt='beer' />
            <div className='beer-row'>
            <div className='beer-col'>
            <h2>{ranBeer.name}</h2>
            <h4 style={{color: '#959595'}}>{ranBeer.tagline}</h4>
            </div>
            <div>
            <h3 style={{color: '#959595'}}>{ranBeer.attenuation_level}</h3>
            <h4>{ranBeer.first_brewed}</h4>
            </div>
            </div>
            <p>{ranBeer.description}</p>
            <h6 style={{color: '#959595'}}>{ranBeer.contributed_by}</h6>
        </div>
    </div>
    )
}

export default RandomBeer