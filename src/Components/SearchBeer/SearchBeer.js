import  React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Home from "../Home/Home"
import { Route } from 'react-router';
const SearchBeer = () => {
   const [keyWord, setKeyword] = useState('banana'); 
   const [newList, setNewList] = useState([])
  console.log(newList.length)
  
useEffect(() => {
  axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${keyWord}`)
    .then((response) => {
      console.log(response);
      keyWord.length > 2 ? setNewList([...response.data]) : setNewList([])
       })
    .catch((err) => console.error(err));
}, [keyWord]);


  return (
    <div className="searchBar">
     
      <input
        className="bar"
        key="random1"
        
        placeholder={'Search Product'}
        onChange={(e)=> setKeyword(e.target.value)}
      />
    {newList.map((beerObj) => {
          return (
            <div key={beerObj._id} className="col-4 mb-3">
              <Link to={`/beers/${beerObj._id}`}>
                <div className="card" style={{ width: "18rem" }}>
                  <div style={{ height: "287px" }}>
                    <img
                                              src={
                        beerObj.image_url
                      }
                      className="card-img-top img-fluid"
                      alt={beerObj.name}
                      style={{  width:"08rem", maxHeight: "287px", objectFit: "" }}
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-black">{beerObj.name}</h3>
                    <h4 className="card-text text-black">{beerObj.tagline}</h4>
                    <p>Created by: {beerObj.contributed_by}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
         {newList.length > 0 ? undefined:   <Route  exact path="/" component={Home} /> }
        
       
    </div>
  );
};

export default SearchBeer;
