import './newBeer.css'
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"



const NewBeer = (() => {
    const [name, setName] = useState()
    const [tagline, setTagline] = useState()
    const [first_brewed, setFirstBrewed] = useState()
    const [brewer_tips, setBrewerTips] = useState()
    const [attenuation_level, setAttenuationLevel] = useState()
    const [contributed_by, setContributor] = useState()
    // const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()

        const newApt = {
            name: name,
            tagline: tagline,
            first_brewed: first_brewed,
            brewer_tips: brewer_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by
        }

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newApt)
            .then( (response) => {
                setName()
                setTagline()
                setFirstBrewed()
                setBrewerTips()
                setAttenuationLevel()
                setContributor()
                console.log(response)
                // navigate('/beers')
            })
            .catch( err => console.log(err))
    }

    return (
        <div className="create-page">
        <h1>Create new beer</h1>

        <form onSubmit={handleSubmit}>
        <label>
                    Name<br />
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label>
                    Tagline<br />
                    <input
                        type="text"
                        name="tagline"
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                    />
                </label>

                <label>
                    First Brewed<br />
                    <input
                        type="text"
                        name="first_brewed"
                        value={first_brewed}
                        onChange={(e) => setFirstBrewed(e.target.value)}
                    />
                </label>

                <label>
                    Brewer Tips<br />
                    <input
                        type="text"
                        name="brewer_tips"
                        value={brewer_tips}
                        onChange={(e) => setBrewerTips(e.target.value)}
                    />
                </label>

                <label>
                    Attenuation Level<br />
                    <input
                        type="number"
                        min={0}
                        name="attenuation_level"
                        value={attenuation_level}
                        onChange={(e) => setAttenuationLevel(e.target.value)}
                    />
                </label>

                <label>
                    Contributor<br />
                    <input
                        type="text"
                        name="contributed_by"
                        value={contributed_by}
                        onChange={(e) => setContributor(e.target.value)}
                    />
                </label>

            <button type="submit">Create Beer</button>
        </form>
        </div>
    )
})

export default NewBeer