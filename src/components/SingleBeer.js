import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';


export default function SingleBeer(props) {
    console.log(props.data)

    const {beerId} = useParams()
   
const myBeer = (props.data).find((element)=>{
    return beerId === element._id
})

console.log(myBeer)

  return (

<div class="card">
<div class="card-image">
  <figure class="image">
    <img width="80px" src={myBeer.image_url} alt="" />
  </figure>
</div>
<div class="card-content">
  <div class="media">
    <div class="media-content">
      <p class="title is-4">{myBeer.name}</p>
      <p class="subtitle is-6">{myBeer.description}</p>
      <p>{myBeer.tagline} <br/>
    {myBeer.first_brewed} 
    {myBeer.attenuation_level} 
    {myBeer.contributed_by}<br/></p>
    </div>
  </div>
</div>
</div>
      

    )}
  

