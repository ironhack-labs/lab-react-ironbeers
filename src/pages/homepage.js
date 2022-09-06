import {useState, useEffect} from 'react'
import axios from 'axios'
import {link} from 'react-router-dom'

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers'

function HomePage () {

    //Set Beer List
    const [beerList, setBeerList] = useState([])

    const getAllBeers = () => {

        axios
            .get(`${API_URL}/`)
            .then((response) => {
                console.log(response.data) 
                setBeerList(response.data)
                    })
                         
            .catch((err) => console.log(err))
    };

    useEffect(() =>{
        getAllBeers()
    }, [])

    

  return (
    <div>
      <h1>All Beers</h1>

      {
        beerList.map((beer) => {
            return(
                <div class="card" style={{ width: "18rem"}}>
                    <img src={beer.image_url} class="card-img-top" style={{ width: "30px" }} alt="..."></img>
                        <div class="card-body">
                        <h5 class="card-title">{beer.name}</h5>
                            <p class="card-text">{beer.tagline}</p>
                        <h6 class="card-title">{beer.contributed_by}</h6>
                        </div>
                </div>
            );
        })
      }
    </div>
  );
}

export default HomePage