import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function CreateBeer({ callbackGetBeers }){

    const navigate = useNavigate()

    const [name, setName] = useState("")    
    const [tagline, setTagline] = useState("")    
    const [description, setDescription] = useState("")    
    const [firstBrewed, setFirstBrewed] = useState("")    
    const [brewersTips, setBrewersTips] = useState("")    
    const [attenuationLevel, setAtttenuationLevel] = useState(0)    
    const [contributedBy, setContributedBy] = useState("")    

    
    const handleSubmit = (e) => {
        e.preventDefault();

    const newBeer = {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: firstBrewed,
        brewers_tips:brewersTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy
        }

        axios
            .post(`${process.env.REACT_APP_API_URL}/new`, newBeer)
            .then(response => {
                callbackGetBeers()
                navigate("/beers")
            })
            .catch(e => console.log("error to create new beer",e));

            setName("")
            setTagline("")
            setDescription("")
            setFirstBrewed("")
            setBrewersTips("")
            setAtttenuationLevel(0)
            setContributedBy("")

    }


    return (
        <>
        <h1>Create Your Own</h1>
        <div className="FormDiv">
        <form onSubmit={handleSubmit}>
            <label >Name <br />
                <input type="text" name="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
            </label>
            <label >Tagline  <br />
                <input type="text" name="tagline" value={tagline} placeholder="Tagline" onChange={(e) => setTagline(e.target.value)} />
            </label>
            <label >Description <br />
                <textarea type="text" name="description" value={description} placeholder="Enter your Description" onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label >First Brewed  <br />
                <input type="text" name="first_brewed" value={firstBrewed} placeholder="First Brewed" onChange={(e) => setFirstBrewed(e.target.value)} />
            </label>
            <label >Brewers Tips  <br />
                <input type="text" name="brewers_tips" value={brewersTips} placeholder="Give us some tips" onChange={(e) => setBrewersTips(e.target.value)} />
            </label>
            <label >Attenuation Level  <br />
                <input type="number" name="attenuation_level" value={attenuationLevel} placeholder="Attenuation Level" onChange={(e) => setAtttenuationLevel(e.target.value)} />
            </label>
            <label >Contributed By  <br />
                <input type="text" name="contributed_by" value={contributedBy} placeholder="contributed_by" onChange={(e) => setContributedBy(e.target.value)} />
            </label>
            <button type="submit"> Create </button>
        </form>
        </div>
        </>
    )
}

export default CreateBeer;