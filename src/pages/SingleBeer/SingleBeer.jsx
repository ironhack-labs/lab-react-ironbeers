import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import "../Beers/Beers.css"

const SingleBeer = () => {
    const { beerId } = useParams();
    const [ singleBeer, setSingleBeer ] = useState({})

  useEffect(()=>{

    const getSingleBeer = async ()=>{

      const url = 'https://ih-beers-api2.herokuapp.com';
      const result = await axios.get(url + `/beers/${beerId}`);
      // console.log(result.data)

      setSingleBeer(result.data)
    }
    getSingleBeer()
  },[beerId])

  return (
    <div>

      {singleBeer.length === 0 && <p>🍺Loading...</p>}
            <div className="beer-display">
                     <Link to="/beers" style={{color: "blue"}}>🔙 Go back to beers</Link>
              <img src={singleBeer.image_url}  alt={singleBeer.name} />
                <div className='beer-display-data'>
                  <h2>{singleBeer.name}</h2>
                  <h5>{singleBeer.tagline}</h5>
                  <p>{singleBeer.attenuation_level?<b>Attenuation level:  {singleBeer.attenuation_level}</b>:null}</p>
                  <p><b>First brewed: </b>{singleBeer.first_brewed}</p>
                  <p>{singleBeer.description}</p>
                  <h6>Created by: {singleBeer.contributed_by}</h6>
                </div>
            </div>
    </div>
  );
}

export default SingleBeer