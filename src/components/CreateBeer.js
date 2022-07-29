import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBeer() {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirstBrewed] = useState("");
    const [brewers_tips, setBrewersTips] = useState("");
    const [attenuation_level, setAttenuation] = useState();
    const [contributed_by, setContributed] = useState("");
    const [newBeer, setNewBeer] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then(() => {
                return (
                    navigate("/beers", { replace: true })
                )
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [newBeer])

    const handleCreate = (e) => {
        e.preventDefault();
        setNewBeer(preValue => {
            const obj = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by };
            return obj
        });
    }

    return (
        <>
            <h1>Add your beer to the collection</h1>
            <div id="create">
                <form onSubmit={handleCreate}>
                    <input required type="text" name="name" placeholder="enter the name of your beer" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <input required type="text" name="Tagline" placeholder="enter the tagline" value={tagline} onChange={(e) => { setTagline(e.target.value) }} />
                    <input type="text" name="description" placeholder="describe your beer" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    <input type="text" name="first_brewed" placeholder="When was it first brewed" value={first_brewed} onChange={(e) => { setFirstBrewed(e.target.value) }} />
                    <input type="text" name="brewers_tips" placeholder="Some tips you would like to share" value={brewers_tips} onChange={(e) => { setBrewersTips(e.target.value) }} />
                    <input type="number" name="attenuation_level" placeholder="Attenuation level" value={attenuation_level} onChange={(e) => { setAttenuation(e.target.value) }} />
                    <input type="text" name="contributed_by" placeholder="your contributor's name" value={contributed_by} onChange={(e) => { setContributed(e.target.value) }} />
                    <button>Create</button>
                </form>
            </div>
        </>
    )
}

export default CreateBeer;