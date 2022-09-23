import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
const API_URL =  process.env.REACT_APP_BASE_URL

function Beer () {
    const [ beer, setBeer] = useState({})
    const params = useParams()

    useEffect(() => {
        axios.get(`${API_URL}/${params.id}`)
            .then(res => setBeer(res.data))
            .catch(err => console.log(err))       

    },[params.id])

    if(!beer) <p>Loading..</p>

    return (
      <div>
        <img src={beer.image_url} alt='beer logo' />
        <div>
            <h2>{beer.name}</h2>
            <p>{beer.attenuation_level}</p>
        </div>
        <div>  
            <h3>{beer.tagline}</h3>
            <p className='brew-date'>{beer.first_brewed}</p>
        </div>   
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>        
      </div>
    )
  }


export default Beer