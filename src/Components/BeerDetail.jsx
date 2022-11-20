import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


function BeerDetail() {
    const [beers, setBeers] = useState({})
  const {id} = useParams()

    const getBeers= async () => {
      try {
        const call = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
      
        setBeers(call.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getBeers();
    }, [id]);

      return (
              <div>
                {beers && ( 
                <div>
 <img src={beers.image_url} alt="" />
 <p>{beers.name}</p>
 <p>{beers.tagline}</p>
 <p>{beers.first_brewed}</p>
<p> {beers.attenuation_level} </p>
<p> {beers.description} </p>
<p>{beers.contributed_by}</p>

</div>
                )}
                 
            </div>
        

   
          
      );
    }
  
  
  export default BeerDetail
  

