import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

function BeerDetailsPage(props) {
const {beerId} = useParams()
{axios.get("https://ih-beers-api2.herokuapp.com/beers/"+{beerId})
.then(response => {
    console.log(response.data)
})
.catch(error => error)
}
    return (
        <>
        <Navbar/>
        <h1>{props.beers.name}</h1>
        <img/>
        <p></p>
        </>
        

    )
}

export default BeerDetailsPage;
