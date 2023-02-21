import { getRandomBeer } from "../../services/beers.services"
import { useEffect, useState } from "react"


const BeerCard = (props) => {
    return(
      <div  className="BeerCard" key={props._id}>
        <img src={props.image_url} alt="beer" height={400}></img>
        <div className="BeerCard-Content">
        <h2>{props.name}</h2>
        <h4>{props.tagline}</h4>
        <p>{props.first_brewed}</p>
        <p>{props.attenuation_level}</p>
        <p>{props.description}</p>
        <p>{props.contributed_by}</p>
        </div>
       </div>
    )
  }


function Random(){
    const [ beer, setBeer] = useState([])

    const getData = async () => {
        try{
            const response = await getRandomBeer()
            setBeer(response.data)
        } catch (error){
            console.log("Beers Error Random", error);
        }
    }
    
    useEffect(() =>{
        getData()
    }, [])
    
    return(
        <div>
            <BeerCard
            key={beer._id}
            {...beer}/>
        </div>

    )
}

export default Random;
