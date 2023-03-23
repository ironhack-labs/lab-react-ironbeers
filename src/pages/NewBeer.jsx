import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';

function NewBeer(){
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewerTips, setBrewerTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState("")
    const [contributedBy, setContributedBy] = useState("")

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        const body = { 
            name: name, 
            tagline: tagline,
            description: description,
            firstBrewed: firstBrewed,
            brewerTips: brewerTips,
            attenuationLevel: Number(attenuationLevel),
            contributedBy: contributedBy };
        
        axios
          .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
          .then((response) => {
            // Reset the state
            setName("");
            setTagline("");
            setDescription("");
            setFirstBrewed("");
            setBrewerTips("");
            setAttenuationLevel("");
            setContributedBy("");
            
            alert(`${name} has been added to the list!`)
            
            // Navigate to the `/` page
            navigate('/beers');                      // <== ADD
          })
          .catch(err=>console.log(err, "in New Beer"))
      };
    
    return(
        <div>
            <Navbar />
            <h1>New Beer</h1>
            <form action="" onSubmit={handleSubmit}>
                
                <p>Name:</p>
                <input 
                    type="text"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                 />

                <p>Tagline:</p>
                <input 
                    type="text"
                    value={tagline}
                    onChange={e=>setTagline(e.target.value)} />

                <p>Description:</p>
                <input 
                    type="text"
                    value={description}
                    onChange={e=>setDescription(e.target.value)} />

                <p>First Brewed:</p>
                <input 
                    type="text"
                    value={firstBrewed}
                    onChange={e=>setFirstBrewed(e.target.value)} />

                <p>Brewers Tips:</p>
                <input 
                    type="text" 
                    value={brewerTips}
                    onChange={e=>setBrewerTips(e.target.value)}/>

                <p>Attenuation Level:</p>
                <input 
                    type="number" 
                    value={attenuationLevel}
                    onChange={e=>setAttenuationLevel(e.target.value)}/>
                
                <p>Contributed By:</p>
                <input 
                    type="text" 
                    value={contributedBy}
                    onChange={e=>setContributedBy(e.target.value)}/>
                    <br />
                <button className="add-btn btn" type="submit">Add</button>
            </form>
            
        </div>
    )
}

export default NewBeer;