import { useEffect, userEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { getBeerById } from "../../services/beers.services"

function DetailPage(){
    const params = useParams()
    const [ beer, setBeer ] = useState({})

   const getData = async () => {
        try{
            const response = await getBeerById(params.idBeer)
            setBeer(response.data)
        } catch (error){
            console.log("Beers Error Detail", error);
        }
    }

    useEffect(() =>{
        getData()
    }, [])

    return(
        <div className="Card">
            <img src={beer.image_url} alt="beerloco"></img>
            <h2>{beer.name}</h2>
            <h4>{beer.tagline}</h4>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>

    )
}

export default DetailPage;