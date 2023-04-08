import { useEffect, useMemo, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";

function Beers() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL)
      .then((response) => {
        console.log(response);
        setBeers(response.data);
      })
      .catch((e) => {
        console.log("error loading bears from API...", e);
      });
  }, []);

  const filteredBeers = useMemo (()=>{
    return beers.filter((element) =>{
      return element.name.toLowerCase().includes(query.toLowerCase())
    })
  }, [beers, query])

  return (
    <div>
      <Header />
      <div>
      <h1>All Beers</h1>
      <h3> Search Beers</h3>
      <input type= "search" value={query} onChange={e => setQuery(e.target.value)} className="App form-size" />
       
      </div>
      <div className="row">
        {filteredBeers ? (
            filteredBeers.map((beerDetail, index) => {
            return (
              <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3">
                <div className="card row">
                  <div className="row">
                    <div className="col-4">
                      <img src={beerDetail.image_url} alt="beer-img" className="beer-image" />
                    </div>
                    <div className="col-8">
                      <div className="card-details">
                        <h3 className="font-weight-bold">{beerDetail.name}</h3>
                        <p className="text-body-tertiary">
                          {beerDetail.tagline}
                        </p>
                        <p>Created by: {beerDetail.contributed_by}</p>
                        <Link to={`/beers/${beerDetail._id}`} className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Beer details</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}

export default Beers;
