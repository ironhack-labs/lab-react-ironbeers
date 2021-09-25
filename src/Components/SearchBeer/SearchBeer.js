import  React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardList from '../CardList/CardList';
import Home from "../Home/Home"
import { Route } from 'react-router';
const SearchBeer = () => {
   const [keyWord, setKeyword] = useState('banana'); 
   const [newList, setNewList] = useState([])
  //console.log(newList.length)
  
useEffect(() => {
  axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${keyWord}`)
    .then((response) => {
      //console.log(response);
      keyWord.length > 2 ? setNewList([...response.data]) : setNewList([])
       })
    .catch((err) => console.error(err));
}, [keyWord]);


  return (
    <div className="searchBar">
     
      <input
        className="bar"
        key="random1"
        
        placeholder={'Search Beer'}
        onChange={(e)=> setKeyword(e.target.value)}
      />
    {newList.map((beerObj) => {
          return (
            <CardList beerObj={beerObj} />
          );
        })}
         {newList.length > 0 ? undefined:   <Route  exact path="/" component={Home} /> }
        
       
    </div>
  );
};

export default SearchBeer;
