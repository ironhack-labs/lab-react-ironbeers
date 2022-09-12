import { NavLink,useNavigate } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'

export default function NewBeer() {
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [firstBrewed, setFirstBrewed] = useState('')
    const [brewerTips, setBrewerTips] = useState('')
    const [attenuation, setAttenuation] = useState('')
    const [creator, setCreator] = useState('')
    const navigate = useNavigate();
    function coucou(e) {
        e.preventDefault()
        const body = { name, tagline, description, first_brewed: firstBrewed, brewer_tips: brewerTips, attenuation_level: attenuation, contributed_by: creator }
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body)
            .then((response) => {
                console.log("response", response)
                setName('')
                setTagline('')
                setDescription('')
                setFirstBrewed('')
                setBrewerTips('')
                setAttenuation('')
                setCreator('')
                navigate('/beers')
            })
        }
        return (
            <div className="NewBeer">
                <NavLink to="/"><img src={"https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"} alt="home" /></NavLink>
                <form onSubmit={coucou}>
                    <label>
                        Name:<input type="text" name="name" value={name} onChange={(event) => { setName(event.target.value) }} />
                    </label>
                    <label>
                        Tagline:<input type="text" name="tagline" value={tagline} onChange={(event) => { setTagline(event.target.value) }} />
                    </label>
                    <label>
                        Description:<input type="text" name="description" value={description} onChange={(event) => { setDescription(event.target.value) }} />
                    </label>
                    <label>
                        First Brewed:<input type="text" name="first_brewed" value={firstBrewed} onChange={(event) => { setFirstBrewed(event.target.value) }} />
                    </label>
                    <label>
                        Brewer Tips:<input type="text" name="brewer_tips" value={brewerTips} onChange={(event) => { setBrewerTips(event.target.value) }} />
                    </label>
                    <label>
                        Attenuation Level<input type="number" name="attenuation_level" value={attenuation} onChange={(event) => { setAttenuation(event.target.valueAsNumber) }} />
                    </label>
                    <label>
                        Created by:<input type="text" name="contributed_by" value={creator} onChange={(event) => { setCreator(event.target.value) }} />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }