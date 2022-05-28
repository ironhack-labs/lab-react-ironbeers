import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
export default function OneBeer(props) {
    console.log(props.beer);
    const { id } = useParams();
    const [beer, setBeer] = useState(null);
 
    const getBeer = async () => {
      const beers = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
      console.log(beers.data);
      setBeer(beers.data);
    }
    useEffect(() => {
        getBeer();    
    })
    if(beer === null){
        return (
          <div className="flex flex-row justify-center items-center place-items-center justify-items-center h-full w-full absolute">
            <div>
            {<PacmanLoader color="yellow"/>}
            </div>
          </div>
        );
    }

    return (
        <div>
            {
            id && <div className='flex flex-col justify-center items-center place-items-center justify-items-center'>
                    <div className='w-1/4 flex flex-row justify-center items-center place-items-center justify-items-center'>
                        <img src={beer.image_url} alt={beer.name} className="p-5 h-76" />
                    </div>
                    <div className="flex flex-col justify-center items-start place-items-center justify-items-center w-3/4">
                        <div className="flex flex-row justify-between items-center place-items-center justify-items-center content-between w-full">
                            <h3 className='text-4xl'>{beer.name}</h3>
                            <p className='text-3xl text-gray-400'>{beer.attenuation_level}</p>
                        </div>
                        <div className="flex flex-row justify-between items-center place-items-center justify-items-center content-between w-full py-3">
                            <p className='text-xl text-gray-500'>{beer.tagline}</p> 
                            <p><strong>{beer.first_brewed}</strong></p>                   
                        </div>
                        <div className="flex flex-row justify-between items-center place-items-center justify-items-center content-between w-full py-3">
                           <p className='text-justify'>{beer.description}</p>             
                        </div>
                        <p className='text-gray-500'><strong> {beer.contributed_by}</strong></p>
                    </div>
                </div>
            }
        </div>
    )
}
