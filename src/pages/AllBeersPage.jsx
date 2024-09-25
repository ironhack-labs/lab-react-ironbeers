import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search";
// import beersJSON from "./../assets/beers.json";
import axios from "axios";
import defaultBeerImage from '../assets/DefaultBeer.jpg'




function AllBeersPage(props) {

  const url="https://ih-beers-api2.herokuapp.com/beers"
  // GET	/	[beers]
  // GET	/:id
  // GET	/random	{ beer }
  // POST	/new	{ message: "New beer successfully saved to database!"}
  // GET	/search?q={query}	[beers]
  

  const {getData, beers, setBeers} = props
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [query, setQuery] = useState('')


  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleImageError = (beer) => {
    beer.image_url = defaultBeerImage;
    setIsImageLoading(false);
  };

  const getQuery = async()=>{
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
    setBeers(response.data)
  }

  useEffect(()=>{
    getData()
    return ()=>{}
  }, [])

  useEffect(()=>{
    getQuery()
    return ()=>{}
  }, [query])


  if (beers === null){
    return (<h3>...loading</h3>)
  }

  return (
    <>
      <Search query={query} setQuery={setQuery}/>

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers &&
          beers.map((beer, i) => {
            return (
              <div key={i}>
                <Link to={"/beers/" + beer._id}>
                  <div className="card m-2 p-2 text-center" style={{ width: "24rem", height: "18rem" }}>
                    <div className="card-body">
                      <img
                        src={beer.image_url}
                        style={{ height: "6rem" }}
                        alt={"image of" + beer.name}
                        onLoad={handleImageLoad}
                        onError={(beer)=>(handleImageError)(beer)}
                      />
                      <h5 className="card-title text-truncate mt-2">{beer.name}</h5>
                      <h6 className="card-subtitle mb-3 text-muted">
                        <em>{beer.tagline}</em>
                      </h6>
                      <p className="card-text">
                        Created by: {beer.contributed_by}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>


    </>
  );
}

export default AllBeersPage;
