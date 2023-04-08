import Header from "./Header"
import axios from "axios"

import { useState } from "react"

function NewBeer(){

    const[name, setName] = useState("")
    const[tagline, setTagline] = useState("")
    const[description, setDescription] = useState("")
    const[first_brewed, setFirst_brewed] = useState("")
    const[brewers_tips, setBrewers_tips] = useState("")
    const[attenuation_level, setAttenuation_level] = useState(0)
    const[contributed_by, setContributed_by] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const createdBeer = {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by
          };

console.log("createdBeer......", createdBeer);
axios
  .post(process.env.REACT_APP_APIURL + "/new", createdBeer)
  .then((response) => {
    console.log("after creating", response)
  })
  .catch((e) => {
    console.log("error creating a new beer...", e);
  });


        }
    
    return (
        <div>
        <Header></Header>
        <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="title" name="title" value={name} onChange={(e) => { setName(e.target.value); }}/>
  </div>

  <div className="form-group ">
    <label for="exampleInputEmail1">Tagline</label>
    <input  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="tagline" name="tagline" value={tagline} onChange={(e) => { setTagline(e.target.value); }}/>
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Description</label>
    <input type="textarea" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="description" value={description} onChange={(e) => { setDescription(e.target.value); }}/>
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">First Brewed</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="first_brewed" name="first_brewed" value={first_brewed} onChange={(e) => { setFirst_brewed(e.target.value); }}/>
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Brewers Tips</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="brewers_tips" name="brewers_tips" value={brewers_tips} onChange={(e) => { setBrewers_tips(e.target.value); }}/>
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Attenuation Level</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="attenuation_level" name="attenuation_level" value={attenuation_level} onChange={(e) => { setAttenuation_level(e.target.value); }}/>
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Contributed By</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="contributed_by" name="contributed_by" value={contributed_by} onChange={(e) => { setContributed_by(e.target.value); }}/>
  </div>
  

  <button type="submit" className="btn btn-primary">Create</button>
</form>
</div>
    )
}

export default NewBeer