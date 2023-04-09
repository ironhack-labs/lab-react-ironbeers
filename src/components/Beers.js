import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Beers(){
    const [beersArr, setBeersArr] = useState(null)
    const [search, setSearch] = useState("")

    useEffect( () => {
        axios
            .get(process.env.REACT_APP_BASE_URL + "/search?q=" + search )
            .then( response => {
                setBeersArr(response.data)
            })
            .catch( err => console.log("error getting data from API", err))
    }, [search])

    const beersList = () => {
        return beersArr.map( beer => {
            return (   
            <div key={beer._id} className="card mb-3 beers-list-card" >
                <div className="row g-0 beer-detail">
                    <div className="col-md-4">
                        <img src={beer.image_url} className="img-fluid rounded-start beer-list-img" alt="beersImg" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{beer.name}</h5>
                            <p className="card-text">{beer.tagline}</p>
                            <p className="card-text"><small className="text-body-secondary">created by: {beer.contributed_by}</small></p>
                        </div>

                        <Link to={`/beers/${beer._id}`} ><button type="button" class="btn btn-outline-primary">Details</button></Link>
                    </div>
                </div>
            </div>
            )
        })
    }
    
    return(
        <>
            <div className="container">
                <input type="text" value={search} placeholder="Search" onChange={ e => setSearch(e.target.value)} />            
            </div>
            

            <div className="container">
                {beersArr ?
                beersList() :
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                }
            </div>
        </>

    )
}

export default Beers;