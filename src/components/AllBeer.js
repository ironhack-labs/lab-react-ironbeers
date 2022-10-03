import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Header from "./Header"

const AllBeer = () => {
    const [beers,setBeers] = useState('')
    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
        .then(res => res.json())
        .then(json => setBeers(json))
        .catch(err => console.log('Error fetching all beer:', err))
    }, [setBeers])
    return (
        <div>
        <Header />
        {beers ? (
            beers.map(element => {
            return (
                <div key={element._id}>
                    <Link style={{textDecoration: 'none', color:'black'}} to={`/beer/${element._id}`}>
                    <div className="all-beer">
                        <img className='all-beer-image' src={element.image_url} alt='beer'/>
                        <div className='all-beer-info'>
                            <h3>{element.name}</h3>
                            <h4>{element.tagline}</h4>
                            <h6><em>Created by:</em>{element.contributed_by}</h6>
                        </div>
                    </div>
                    </Link>
                    <hr></hr>
                </div>
            )
        })) : (<p>Loading...</p>) }
        </div>
    )
}

export default AllBeer