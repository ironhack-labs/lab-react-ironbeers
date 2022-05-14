import { Link, useParams } from "react-router-dom";
import house from "../assets/houseIcon.png";

const SingleBeer = (props) => {
    const beerList = props.listOfBeers;
    const {beerId} = useParams();

    const beerFound = beerList.find(beer => beer._id === beerId)
    


    const renderBeerInfo = () => {
        return(
        <>
            <header className="navbar navbar-expand-lg navbar-light justify-content-center bg-info">
                <Link to="/"><img style={{width: "3rem"}} src={house} alt="Home Button"></img></Link>
            </header>
            <div className="container mt-5">
                <div>
                    <img style={{height: "50vh", width: "auto"}} src={beerFound.image_url} alt={beerFound.name}/>
                </div>
                <table class="table">
                <tbody>
                    <tr>
                        <td><h1>{beerFound.name}</h1></td>
                        <td><h2>{beerFound.attenuation_level}</h2></td>
                    </tr>
                    <tr>
                        <td>{beerFound.tagline}</td>
                        <td>{beerFound.first_brewed}</td>
                    </tr>
                </tbody>
                </table>
                <div>
                    <p>{beerFound.description}</p>
                    <h6>{beerFound.contributed_by}</h6>
                </div>
            </div>
        </>
        )
    }

    return(<>{beerFound ? renderBeerInfo() : <p>Loading beer info...</p>}</>)
        
}

export default SingleBeer;