import header from "../assets/header.png";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./Header";
import SingleBeer from "./SingleBeer";




function ListBeers() {
    const navigate = useNavigate();

const[beerList, setBeerList] = useState([])

    useEffect(() => {
        axios
          .get(process.env.REACT_APP_APIURL)
          .then((response) => {
            setBeerList(response.data);
          })
          .catch((e) => {
            console.log("error getting beer list from API...", e);
          });
      }, []);


      const retrieveSearch = (searchValue) =>{
        console.log(searchValue)
        axios.get(process.env.REACT_APP_APIURL +"/search?q="+searchValue)
        .then((response)=>{
            setBeerList(response.data)
        })
      }


      return (
        <>
          <Header></Header>
          <input
            type="text"
            onChange={(e) => {
              retrieveSearch(e.target.value);
            }}
          />
          {beerList ? (
            beerList.map((beer) => {
              return (
                <div
                  onClick={() => {
                    navigate("/beer-details/" + beer._id);
                  }}
                  className="card mb-3"
                  style={{ maxWidth: 240 + "px", maxHeight: 440 + "px" }}
                  key={beer._id}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={beer.image_url}
                        className="img-fluid rounded-start"
                        alt="beer image"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{beer.name}</h5>
                        <p className="card-text">{beer.tagline}</p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            "loading...."
          )}
        </>
      );
}

export default ListBeers;
