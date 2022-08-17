import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from './axios'


function SingleBeer (){

    const params = useParams()

    const [beerData,setBeerData] = useState({})
    const [loading,setLoading] = useState(true)


    useEffect(()=>{
        api.get(`/beers/${params._id}`)
        .then(res=>{
            console.log("el data",res.data)
            setBeerData(res.data)
            setLoading(false)
        })
        .catch(error=>console.log("el error es",error))
    },[params.id])

  

    return(
       
        <div>
            <img src={beerData.image_url}  alt="detailBeer" ></img>
            <p>{beerData.name}</p>
            <p>Tagline:{beerData.tagline}</p>
            <p>First brewed:{beerData.first_brewed}</p>
            <p>Attenuation level : {beerData.attenuation_level}</p>
            <p>Description {beerData.description}</p>
            <p>Contributed by: {beerData.contributed_by}</p>
        </div>

    )
}

export default SingleBeer;