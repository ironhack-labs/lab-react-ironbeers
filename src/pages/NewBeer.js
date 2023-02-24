import axios from "axios";
import {useState, useEffect} from "react";



function NewBeer() {
    const [newBeer, setNewBeer] = useState({});
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState("");

    const body

    useEffect(() => {
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new")
    })

    return ( 
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={name} onChange={}/>
            <label htmlFor="tagline">Tagline</label>
            <input type="text" name="tagline" value={tagline} onChange={}/>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" value={description} onChange={}/>
            {/* <label htmlFor="">Name</label>
            <input type="text" name="name" value={} onChange={}/>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={} onChange={}/>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={} onChange={}/>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={} onChange={}/>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={} onChange={}/> */}





        </form>
     );
}

export default NewBeer;