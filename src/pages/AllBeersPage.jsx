import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function AllBeersPage() {
    const [beers, setBeers] = useState([]);
    const [fetching, setFetching] = useState([true]);

    useEffect (() =>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response)=> {
            setBeers (response.data)
            fetching(false)
            console.log(response.data)
        })
    }, [])
    return (
        <div className="container p-5">
            <h3 className="text-center">List of Beers</h3>
            <div className="d-flex row row-cols-3">
                {fetching}
                {beers.map((beer) => {
                    return (
                        <div className="d-flex col flex-column p-5 align-items-center">
                            <img className="row w-25" src={beer.image_url} width={80} height={170}/>
                            <Link className="mt-4" to={`/beers/${beer._id}`}>
                                <button className=" text-light rounded border-primary bg-primary"> {beer.name} </button>
                            </Link>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


{/* <div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div> */}

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

export default AllBeersPage;
