import axios from "axios"
import { useState } from "react"
import "./NewBeer.css"
export default function NewBeer(){
    const apiURL = process.env.REACT_APP_API_URL

    const [inputs,setInputs]=useState({})

    const handleInputs =(e)=>{
        setInputs(prevInputs=>{
            const newInputs = {
              ...prevInputs,
              [e.target.name]: e.target.type ==="number" ? parseInt(e.target.value) : e.target.value
            };

            return newInputs
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(inputs)
        axios.post(apiURL+"/new",inputs)
            .then(response=>{
                console.log("the new beer was successfully created",response.data)
            })
            .catch(e=>{
                console.log("something happened creating a new beer",e)
            })

        setInputs({})
    }
    return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={inputs?.name || ""}
            onChange={handleInputs}
            required
          />

          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            name="tagline"
            id="tagline"
            value={inputs?.tagline || ""}
            onChange={handleInputs}
          />

          <label htmlFor="description">Description</label>
          <textarea
            rows="5"
            cols="30"
            name="description"
            id="description"
            value={inputs?.description || ""}
            onChange={handleInputs}
            required
          />

          <label htmlFor="first_brewed">First brewed</label>
          <input
            type="text"
            name="first_brewed"
            id="first_brewed"
            placeholder="04/2008"
            value={inputs?.first_brewed || ""}
            onChange={handleInputs}
          />

          <label htmlFor="brewers_tips">Brewers tips</label>
          <input
            type="text"
            name="brewers_tips"
            id="brewers_tips"
            value={inputs?.brewers_tips || ""}
            onChange={handleInputs}
          />

          <label htmlFor="attenuation_level">Attenuation level </label>
          <input
            type="number"
            min="1"
            name="attenuation_level"
            placeholder="76"
            id="attenuation_level"
            value={inputs?.attenuation_level || ""}
            onChange={handleInputs}
          />

          <label htmlFor="contributed_by">Contributed by</label>
          <input
            type="text"
            name="contributed_by"
            id="contributed_by"
            value={inputs?.contributed_by || ""}
            onChange={handleInputs}
          />
          <button>Add new</button>
        </form>
      </div>
    );

}