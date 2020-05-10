import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';


// function component only render functions that are in class component render();
// convert function to class: move the function inside render()  
//image is html tag so <>, name etc. are js so use {}
function Beer(props) {
  return (
    
      <Link
        key={props.index}
        to={`/beers/${props.id}`}
      >
        <img src={props.image_url} alt="" style={{width:"100px"}}/>
        {props.name}
        {props.tagline}
        {props.contributed_by}
      </Link>

   
  );
}

export default Beer;
