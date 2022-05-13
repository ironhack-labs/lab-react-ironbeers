import { Link } from "react-router-dom";
import house from "../assets/houseIcon.png";

const ListBeers = (props) => {
    const beerList = props.listOfBeers;

    console.log(beerList[0])


    const renderListOfBeers = () => {
        return beerList.map(beer => {
            return(
                <li>
                    <div className="container d-flex mt-3 mb-3 border" style={{width: "60vw"}}>
                        <div className="card-header">
                            <img className="card-img-top" style={{height: "15rem", width: "auto"}} src={beer.image_url} alt={beer.name}/>
                        </div>
                        <div className="card-body">
                            <Link className="text-dark" to={`/beers/:beerId`}><h1 className="card-title">{beer.name}</h1></Link>
                            <h2>{beer.tagline}</h2>
                            <p><strong>Created by: </strong>{(beer.contributed_by).slice(0, (beer.contributed_by).indexOf("<"))}</p>
                        </div>
                    </div>
                </li>
            )
        })
    }


    return(
        <>
            <header className="navbar navbar-expand-lg navbar-light justify-content-center bg-info">
                <Link to="/"><img style={{width: "3rem"}} src={house} alt="Home Button"></img></Link>
            </header>
            <ul className="list-unstyled">{beerList ? renderListOfBeers() : <p>Loading List of Beers</p>}</ul>
        </>
    )

}

export default ListBeers;