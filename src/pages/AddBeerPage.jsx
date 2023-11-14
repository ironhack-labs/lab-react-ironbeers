import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const beersAPI_UR = "https://ih-beers-api2.herokuapp.com/beers/new"

function AddBeerPage() {
    
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstYear, setFirstYear] = useState("")
    const [brewerTip, setBrewerTip] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [creator, setCreator] = useState("")

    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const requestBody = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstYear,
            brewers_tip: brewerTip,
            attenuation_level: attenuationLevel,
            contributed_by: creator
        }

        axios.post(beersAPI_UR, requestBody)
            .then((response) => {
                navigate("/beers")
            })
            .catch((error) => {
                console.log("Error in creating a new beer: " + error)
            })
    }
    
    return (
      <div>
        <form className="AddBeer" onSubmit={handleSubmit}>
          <label className="Label">
            Name
            <input 
            type="text" 
            name="name" 
            placeholder="enter the name"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="Label">
            Tagline
            <input 
            type="text" 
            name="tagline" 
            placeholder="enter the tagline"
            required={true}
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            />
          </label>

          <label className="Label">
            First Brewed
            <input 
            type="text" 
            name="first_brewed" 
            placeholder="enter date of first brewery"
            required={true}
            value={firstYear}
            onChange={(e) => setFirstYear(e.target.value)}
            />
          </label>

          <label className="Label">
            Brewer's Tip
            <input 
            type="text" 
            name="brewers_tips" 
            placeholder="enter the brewer's tip"
            required={false}
            value={brewerTip}
            onChange={(e) => setBrewerTip(e.target.value)}
            />
          </label>

          <label className="Label">
            Attenuation Level
            <input 
            type="number" 
            name="attenuation_level" 
            placeholder="0"
            required={true}
            value={attenuationLevel}
            onChange={(e) => setAttenuationLevel(e.target.value)}
            />
          </label>

          <label className="Label">
            Contributed by
            <input 
            type="text" 
            name="contributed_by" 
            placeholder="enter the name contributed by"
            required={true}
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
            />
          </label>

          <label className="Label">
            Description
            <textarea 
            type="text" 
            name="description" 
            placeholder="enter the description"
            required={false}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <button className="newBeerButton" type="submit">Add Beer</button>

          
        </form>
      </div>
    );
    
}

export default AddBeerPage;
