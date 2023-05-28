import { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function NewBeer() {

    const [ name, setName ] = useState()
    const [ tagline, setTagline ] = useState()
    const [ description, setDescription ] = useState()
    const [ first_brewed, setFirstBrewed ] = useState()
    const [ brewers_tips, setBrewersTips ] = useState()
    const [ attenuation_level, setAttenuationLevel ] = useState()
    const [ contributed_by, setContributedBy ] = useState()

    const navigate = useNavigate();


    const handleOnSubmit = (event) => {
        event.preventDefault()
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by})
        .then(() => {
            navigate("/beers")
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const onChangeName = (value) => setName(value)

    const onChangeTagline = (value) => setTagline(value)
    
    const onChangeDescription = (value) => setDescription(value)
    
    const onChangeFirstBrewed = (value) => setFirstBrewed(value)
    
    const onChangeBrewersTips = (value) => setBrewersTips(value)
    
    const onChangeAttenuationLevel = (value) => setAttenuationLevel(value)
    
    const onChangeContributedBy = (value) => setContributedBy(value)


  return (
    <div>
    <Header/>
    <form onSubmit={handleOnSubmit}>
        <Input name="name" type="text" label="Name: " onChange={onChangeName}/>
        <Input name="tagline" type="text" label="Tagline: " onChange={onChangeTagline}/>
        <Input name="description" type="text" label="Description: " onChange={onChangeDescription}/>
        <Input name="first_brewed" type="text" label="First Brewed: " onChange={onChangeFirstBrewed}/>
        <Input name="brewers_tips" type="text" label="Brewers Tips: " onChange={onChangeBrewersTips}/>
        <Input name="attenuation_level" type="number" label="Attenuation Level: " onChange={onChangeAttenuationLevel}/>
        <Input name="contributed_by" type="text" label="Contributed By: " onChange={onChangeContributedBy}/>

        <button>ADD NEW</button>
    </form>
        


    </div>

  )
}

export default NewBeer;