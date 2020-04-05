import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'

export const Beers = () => {
    const [beers, setBeers] = useState([]);

    const getAllBeers = () =>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers/')
        .then((res)=> setBeers(res.data))
    }

    useEffect(() => {
        getAllBeers();
    }, [])


    return (
        <div>
        {/* {console.log(beers)} */}
        <div>
        
      <div className="row">
        <div className =" d-flex justify-content-around flex-wrap align-items-end p-5">
          { beers.map( beer => {
            return (
              <div  key={beer._id}>
                <Link to={`/beers/${beer._id}`}>


                <div className="card cardBeer ">
                <div className="card-body d-flex justify-content-center flex-wrap align-items-end">
                <img className="beerImg" src={beer.image_url} alt="" srcset=""/>
                </div> 
                </div>
                <div className="card  mb-5 cardBeert">
                <div className="card-body d-flex justify-content-center flex-wrap align-items-end">

                <h3 className="text-center text-Beer">{beer.name}</h3>
                  </div>  
                    </div>


                </Link>

              </div>
            )})
          }
        </div>
      </div>
      </div> 
        </div>
    )
}
