import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, Link } from "react-router-dom";


export default function Beer() {

    const [beerDetail, setBeerDetail] = useState([])


    
    useEffect(() => {
        const getBeer = async() => {
            let resServer = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
            console.log(resServer.data)
            setBeerDetail(resServer.data)
        }
        getBeer()
    },[])

    return (
        <div>
           <div className='col'>
               {
                   beerDetail.map((elem,id) => {
                       return(
                           
                           <div key={id} className='d-flex border'>
                                <Link to={`/beers/${elem._id}`}>
                                    <img className='ml-4' height='100px' src={elem.image_url} alt={elem.name} />
                                </Link>
                                <div className='ml-4'>
                                    <Link to={`/beer/${id}`}>
                                        <p>{elem.name}</p>
                                    </Link>
                                    <p>{elem.tagline}</p>
                                    <p>{elem.contributed_by}</p>
                                </div>
                           </div>
                           
                       )
                   })
               }
           </div>
        </div>
    )
}
