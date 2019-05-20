import React, {Component} from 'react';
import {getBeer} from '../services/beers';



const Beer = (props) => {



let fn = getBeer;
let x =  props.match.params.id;
console.log('esta es la fn: ',x);  
let y = fn(x)
.then (dt=>  {
     const d = dt;
     console.log(d)
    })
;



       
return(
    <div>

   
         <div  className='uk-card uk-card-default'>
         <div className='uk-card-media-top'>
         <img src ={y.image_url} alt ='alv' width='100px' height ='100px'/>
         </div>
         <div className ='uk-card-body'>
         <h3>{y.name}</h3>
         <p> Created By:{y.contributed_by}</p>
         </div>
         </div>
         
   
  

    </div>
)
   
}

export default Beer;