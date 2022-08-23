import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link}  from 'react-router-dom'

function AllBeersPage() {

    const [beers, setBeers] = useState([])

    const getBeers = async () => {
        try {
            let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
            setBeers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBeers();
    }, [])

  return (

    <div className='all-beers-page'>

    {beers.map((el) => {
 return (
        <div className='all-beers-card' key={el._id}>
            <img src={el.image_url} alt="beer image" className='beer-img'/>
            <h1>{el.name}</h1>
            <h2>{el.tagline}</h2>
            <h5>{el.contributed_by}</h5>
            <Link to={`/beers/${el._id}`}>View Beer Details</Link>
            <hr />
        </div>
    )
})}

    </div>
  )
}

export default AllBeersPage