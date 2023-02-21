import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getAllBeers } from "../../services/beers.services"

const BeerCard = (props) => {
    return(
      <div key={props._id} className="BeerCard">
        <img src={props.image_url} alt="beer" height={400}/> 
        <div className="BeerCard-Content">
        <h3>{props.name}</h3>
        <p>Created by: {props.contributed_by}</p>
        <Link to={`${props._id}`}>See more</Link>
        </div>
       </div>
    )
  }

function BeersPage(){
    const [ beers, setBeers] = useState([])

    const getData = async () => {
        try{
            const response = await getAllBeers()
            setBeers(response.data)
        } catch (error){
            console.log("Beers Error Loco", error);
        }
    }
    
    useEffect(() =>{
        getData()
    }, [])

    return(
        <div>
            <h3>Beer List</h3>
            {
                beers.length ?
                beers.map((beer) =>(
                    <BeerCard
                    key={beer._id}
                    {...beer}
                    />
                ))
                :
                <h2> Loading... </h2>
            }
        </div>

    )
}

export default BeersPage;