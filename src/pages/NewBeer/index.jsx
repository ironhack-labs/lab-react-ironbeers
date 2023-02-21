import { useState } from "react"
import { createBeer } from "../../services/beers.services"

function AddBeer(){
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [brewed, setBrewed] = useState("");
    const [attenuation, setAttenuation] = useState(0);
    const [contribute, setContribute] = useState("");
 
  
    const handleSubmit = (e) => {
    e.preventDefault();
    const body = { 
        name: name,
        tagline: tagline,
        description: description,
        brewed: brewed,
        attenuation: attenuation,
        contribute: contribute
    };
}
     
    return(
    <div >    
      <h3>Create a new beer</h3>
      
      <form className="New" onSubmit={handleSubmit}>
        <label className="label">Name</label>
        <input className="input"
          type="text"
          name="headline"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label className="label">Tagline</label>
        <input className="input"
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />
        
        <label className="label">Description</label>
        <input className="input"
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label className="label">First brewed</label>
        <input className="input"
          type="text"
          name="brewed"
          onChange={(e) => setBrewed(e.target.value)}
          value={brewed}
        />
 
        <label className="label">Attenuation level</label>
        <input className="input"
          type="number"
          name="attenuation"
          onChange={(e) => setAttenuation(e.target.value)}
          value={attenuation}
        />

        <label className="label">Contributed by</label>
        <input className="input"
          type="text"
          name="contribute"
          onChange={(e) => setContribute(e.target.value)}
          value={contribute}
        />

        <button type="submit">Add new</button>
      </form>
    </div>
        

    )
}

export default AddBeer;