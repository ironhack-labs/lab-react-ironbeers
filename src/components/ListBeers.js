import Header from "./Header";
import axios from "axios";
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"


function ListBeers () {

const [beers, setBeers] = useState([]);

useEffect(()=>{
    axios.get(process.env.REACT_APP_API_URL)
        .then(response => {
            console.log(response.data);
            setBeers(response.data);
        })
        .catch(e => console.log("error getting beers from API", e));
    }, []);

    return(
    
        <div>
            <Header />
            <h1>list Beers</h1>
            {beers.map((beersObj) =>{
                    console.log(beersObj);
                    return (
                        <div key={beersObj.name} >
                            <img src={beersObj.image_url} alt={beersObj.name} />
                            <h2>Name: {beersObj.name}</h2>
                            <h4>tagline: {beersObj.tagline}</h4>
                            <p>contributed by: {beersObj.contributed_by}</p> <br />
                            <Link to={`/beers/${beersObj._id}`}>More Details</Link>

                        </div>
                    )
            })}


         
        </div>
      );
}

export default ListBeers