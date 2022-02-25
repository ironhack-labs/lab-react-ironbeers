
import { useEffect, useState } from 'react'
import beerHandler from "../services/beers.handler";
import { Link } from 'react-router-dom';

import BeersCard from "../components/beersCard/BeersCard";
import { Container } from 'react-bootstrap';

const BeersPage = () => {
  const [listData,setListData]=useState([])

  useEffect(()=>{
      listBeers()
  },[])
    const listBeers=()=>{
        beerHandler
            .getBeers()
            .then(({ data }) => setListData(data))
            .catch(err => console.log(err))
    }
    return (
        <Container>
            {listData.map(beer=>{
                return(
                    <Link to = {`/beers/${beer._id}`}>
                    <div className='ListedBeerCard' key={beer._id}>
                            <img src={beer.image_url} alt={beer.name} />
                            <h3>{beer.name}</h3>
                            <p>{beer.tagline}</p>
                            <p>{beer.contributed_by}</p>
                    </div>
                    </Link>
                    
                )
            })}
        </Container>
        
    )
}

export default BeersPage