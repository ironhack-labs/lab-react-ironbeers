import { useState } from "react";

function CreateBeer(props){

const[name, setName] = useState(null)
const[tagline, setTagline] = useState(null)
const[description, setDescription] = useState(null)
const[firstBrewed, setFirstBrewed] = useState(null)
const[brewersTips, setBrewersTips] = useState(null)
const[attenuationLevel, setAttenuationLevel] = useState(null)
const[contributedBy, setContributedBy] = useState(null)



const newBeer ={
    name: name,
    tagline: tagline,
    description: description, 
    firstBrewed: firstBrewed,
    brewersTips: brewersTips,
    attenuationLevel: attenuationLevel,
    contributedBy: contributedBy
}

const createNewBeer=(e)=>{
    e.preventDefault();

    props.createBeer(newBeer)

    setName("")
    setTagline("")
    setDescription("")
    setFirstBrewed("")
    setBrewersTips("")
    setAttenuationLevel("")
    setContributedBy("")
}

    return(
        <>
        <h1>Create a new Beer</h1>
        <form onSubmit={createNewBeer}>
        <div className="input">
        Name
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
        </div>
        <div className="input">
        Tagline
            <input type="text" name="tagline" value={tagline} onChange={(e)=>setTagline(e.target.value)}></input>
        </div>
        <div className="input">
        Description
            <input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}></input>
        </div>
               <div className="input">
        First brewed
            <input type="text" name="firstBrewed" value={firstBrewed} onChange={(e)=>setFirstBrewed(e.target.value)}></input>
        </div>
        <div className="input">
        Brewers Tips
            <input type="text" name="brewersTips" value={brewersTips} onChange={(e)=>setBrewersTips(e.target.value)}></input>
        </div>
        <div className="input">
        Attenuation Level
            <input type="number" name="attenuationLevel" value={attenuationLevel} onChange={(e)=>setAttenuationLevel(e.target.value)}></input>
        </div>
        <div className="input">
        Contributed by
            <input type="text" name="contributedBy" value={contributedBy} onChange={(e)=>setContributedBy(e.target.value)}></input>
        </div>
       

            <button>Create now!</button>
        </form>
        </>
    )
}


export default CreateBeer;