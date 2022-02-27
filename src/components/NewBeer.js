import React from 'react'
import {useState} from 'react';

import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function NewBeer() {

    const url = "https://ih-beers-api2.herokuapp.com/beers/new"

    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
    });

    const handleData = (e)=>{
        const newData = {...data};
        newData[e.target.name]= e.target.value;
        setData(newData);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        axios
        .post(url, data)
        .then((result) => {
          setData({
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            contributed_by: "",
          });
          navigate("/beers");
        })
        .catch((error) => console.log(error));
    
    }
  return (
        <div>
            <div>
                <h2>Create a beer</h2>
            </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label> <br />
              <input
                type="text"
                name="name"
                onChange={handleData}
                value={data.name}
              />
            </div>
            <div>
              <label>Tagline</label> <br />
              <input
                type="text"
                name="tagline"
                onChange={handleData}
                value={data.tagline}
              />
            </div>
    
            <div>
              <label>Description</label> <br />
              <input
                type="text"
                name="description"
                onChange={handleData}
                value={data.description}
              />
            </div>
    
            <div>
              <label>First Brewed</label> <br />
              <input
                type="text"
                name="first_brewed"
                onChange={handleData}
                value={data.first_brewed}
              />
            </div>
    
            <div>
              <label>Brewer Tips</label> <br />
              <input
                type="text"
                name="brewers_tips"
                onChange={handleData}
                value={data.brewers_tips}
              />
            </div>
    
            <div>
              <label>Attenuation level</label> <br />
              <input
                type="number"
                name="attenuation_level"
                onChange={handleData}
                value={data.attenuation_level}
              />
            </div>
    
            <div>
              <label>Contributed by</label> <br />
              <input
                type="text"
                name="contributed_by"
                onChange={handleData}
                value={data.contributed_by}
              />
            </div>
    
            <button type="submit">Add new</button>
          </form>
        </div>

  )
}
