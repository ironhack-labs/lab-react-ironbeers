
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function NewBeer(props){
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState(null)
    const [contributedBy, setContributedBy] = useState("")   
    
    const navigate = useNavigate()

    const handelSubmit = (e) => {
        e.preventDefault();
        const newBeerObj = {
            "name": name,
            "tagline": tagline,
            "description": description,
            "firstBrewed": firstBrewed,
            "brewersTips": brewersTips,
            "attenuationLevel": attenuationLevel,
            "contributedBy": contributedBy
        }
        createNewBeer(newBeerObj);
        setName("")
        setTagline("")
        setDescription("")
        setFirstBrewed("")
        setBrewersTips("")
        setAttenuationLevel("")
        setContributedBy("")
        navigate("/beers")
    }
    const createNewBeer = (newBeerObj) => {
        console.log(newBeerObj)
        axios
           .post(process.env.REACT_APP_API_URL+ "/new", newBeerObj)
           .then((r) => {
              console.log(r)
              props.getInfoFromAPI()
           })
           .then(() => console.log('New beer successfully saved to database!'))
           .catch((e) => console.log("error creating new Beer", e))
    }

    return(
        <form onSubmit={handelSubmit}>
            <label>
                <input
                    name="name"
                    type="text"
                    placeholder="Beer's Name"
                    value={name}
                    required={true}
                    onChange={(e) => { setName(e.target.value) }}
                />
            </label><br />
            <label>
                <input
                    name="tagline"
                    type="text"
                    placeholder="Beer's tagline"
                    value={tagline}
                    required={true}
                    onChange={(e) => { setTagline(e.target.value) }}
                />
            </label><br />
            <label>
                <textarea
                    name="description"
                    type="text"
                    placeholder="Beer's description"
                    value={description}
                    required={true}
                    rows="4" 
                    cols="5"
                    onChange={(e) => { setDescription(e.target.value) }}
                />
            </label><br />
            <label>
                <input
                    name="firstBrewed"
                    type="text"
                    placeholder="first_brewed"
                    value={firstBrewed}
                    required={true}
                    onChange={(e) => { setFirstBrewed(e.target.value) }}
                />
            </label><br />
            <label>
                <input
                    name="brewersTips"
                    type="text"
                    placeholder="brewersTips"
                    value={brewersTips}
                    required={true}
                    onChange={(e) => { setBrewersTips(e.target.value) }}
                />
            </label><br />
            <label>
                <input
                    name="attenuationLevel"
                    type="number"
                    placeholder="attenuationLevel"
                    value={attenuationLevel}
                    required={true}
                    onChange={(e) => { setAttenuationLevel(e.target.value) }}
                />
            </label><br />
            <label>
                <input
                    name="contributedBy"
                    type="text"
                    placeholder="contributedBy"
                    value={contributedBy}
                    required={true}
                    onChange={(e) => { setContributedBy(e.target.value) }}
                />
            </label>
            <button>ADD NEW</button>
        </form>
    )
}