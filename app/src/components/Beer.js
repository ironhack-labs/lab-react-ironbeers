import React, {useEffect,useState} from 'react';
import {getBeer} from '../services/beers';



const Beer = (props) => {
const [beer,setBeer]= useState([])
useEffect( () => {
    getBeer(props.match.params.id)
    .then(res => {console.log(res);
        setBeer(res)})
   },[props.match.params.id]);
  
return(
    <div>
         <div  className='uk-card uk-card-default'>
         <div className='uk-card-media-top'>
         <img src ={beer.image_url} alt ='alv' width='100px' height ='100px'/>
         </div>
         <div className ='uk-card-body'>
         <h3>{beer.name}</h3>
         <p> Description: {beer.description}</p>
         <p> TIPS: {beer.brewers_tips}</p>
         </div>
         </div>

    </div>
)
   
}

export default Beer;