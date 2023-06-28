import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CreateBeer(){

    let baseUrl = "https://ih-beers-api2.herokuapp.com/beers/new"

    const [nameBeer, setNameBeer] = useState(undefined)
    const [taglineBeer, setTaglineBeer] = useState(undefined)
    const [descriptionBeer, setDescriptionBeer] = useState(undefined)
    const [firstBrewedBeer, setFirstBrewedBeer] = useState(undefined)
    const [brewersTipsBeer, setBrewersTipsBeer] = useState(undefined)
    const [attenuationLevelBeer, setAttenuationLevelBeer] = useState(undefined)
    const [contributedByBeer, setContributedByBeer] = useState(undefined)
    const navigate = useNavigate()

    const create = () => {
        
        const newBeer = {
            name: nameBeer,
            tagline: taglineBeer,
            description: descriptionBeer,
            first_brewed: firstBrewedBeer,
            brewers_tips: brewersTipsBeer,
            attenuation_level: attenuationLevelBeer,
            contributed_by: contributedByBeer,

        }

        axios.post(baseUrl, newBeer)
            .then((e) => {
                navigate('/beers')
            })
            .then((e) => {
                console.log(e)
            })

    }   

    console.log(nameBeer);

    return(
        <form onSubmit={create}>
            <label> Name :
                <input 
                value={nameBeer} 
                placeholder="Enter Name" 
                type="text"
                onChange={(e) => {setNameBeer(e.target.value)}}
                />
            </label>

            <label> Tagline :
                <input 
                value={taglineBeer} 
                placeholder="Enter Tagline" 
                type="text"
                onChange={(e) => {setTaglineBeer(e.target.value)}}
                />
            </label>


            <label> Description :
                <input 
                value={descriptionBeer} 
                placeholder="Enter Description" 
                type="text"
                onChange={(e) => {setDescriptionBeer(e.target.value)}}
                />
            </label>

            <label> First Brewed :
                <input 
                value={firstBrewedBeer} 
                placeholder="Enter first Brewed" 
                type="text"
                onChange={(e) => {setFirstBrewedBeer(e.target.value)}}
                />
            </label>


            <label> Tips
                <input 
                value={brewersTipsBeer} 
                placeholder="Enter Tips" 
                type="text"
                onChange={(e) => {setBrewersTipsBeer(e.target.value)}}
                />
            </label>

            <label> Attenuation Level :
                <input 
                value={attenuationLevelBeer} 
                placeholder="Enter Attenuation level" 
                type="number"
                onChange={(e) => {setAttenuationLevelBeer(e.target.value)}}
                />
            </label>

            <label> Contributor :
                <input 
                value={contributedByBeer} 
                placeholder="Enter Contributor" 
                type="text"
                onChange={(e) => {setContributedByBeer(e.target.value)}}
                />
            </label>

            <button type="submit">Add new One</button>
        </form>
    )
}
export default CreateBeer