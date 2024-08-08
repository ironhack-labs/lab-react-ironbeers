import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddBeerPage() {

    const [name, setName] = useState()
    const [tagline, setTagline] = useState()
    const [description, setDescription] = useState()
    const [firstBrewed, setFirstBrewed] = useState()
    const [brewersTips, setBrewersTips] = useState()
    const [attenuation, setAttenuation] = useState()
    const [contributor, setContributor] = useState()

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        let newBeer = { attenuation_level: attenuation, brewers_tips: brewersTips, contributed_by: contributor, description: description, first_brewed: firstBrewed, name: name, tagline: tagline }
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then(() => {
                alert("Congrats, you've made your own beer.")
                navigate('/')
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <div>
            <form className="createBeerForm" onSubmit={handleSubmit}>
                <label >
                    Name:
                    <input type="text" onChange={(e)=>{setName(e.target.value)}} />
                </label>

                <label >
                    Tagline:
                    <input type="text" onChange={(e)=>{setTagline(e.target.value)}} />
                </label>

                <label >
                    Description:
                    <input type="text" onChange={(e)=>{setDescription(e.target.value)}}/>
                </label>

                <label >
                    First Brewed:
                    <input type="text" onChange={(e)=>{setFirstBrewed(e.target.value)}}/>
                </label>

                <label >
                    Brewer's Tips:
                    <input type="text" onChange={(e)=>{setBrewersTips(e.target.value)}}/>
                </label>

                <label >
                    Attenuation Level:
                    <input type="number" onChange={(e)=>{setAttenuation(e.target.value)}}/>
                </label>

                <label >
                    Contibuted By:
                    <input type="text" onChange={(e)=>{setContributor(e.target.value)}}/>
                </label>

                <button id="submitBeer" type="submit">Add Beer</button>
            </form>
        </div>
    )

}

export default AddBeerPage;
