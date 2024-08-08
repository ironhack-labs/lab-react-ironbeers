import { useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function AddBeerPage() {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirst_brewed] = useState("")
    const [brewers_tips,setBrewers_tips] = useState("")
    const [attenuation_level, setAttenuation_level] = useState(0)
    const [contributed_by,setContributed_by] = useState("")

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        let newBeer ={name:name, tagline:tagline, description:description, first_brewed:first_brewed, brewers_tips:brewers_tips, attenuation_level:attenuation_level, contributed_by:contributed_by}
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
        .then(()=>{
            alert("New Beer info has been created")
            navigate('/')})
            .catch((err)=>{
                console.log(err)
            })
    }
    
  return (
    <div>
        <Navbar/>

        <form onSubmit={handleSubmit} className="label-container">
            <label className="label-item">
                Name:
                <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
            </label>
            <label className="label-item">
                Tagline:
                <input type="text" onChange={(e)=>{setTagline(e.target.value)}}/>
            </label>
            <label className="label-item">
                Description:
                <textarea type="text" onChange={(e)=>{setDescription(e.target.value)}}/>
            </label>
            <label className="label-item">
                First Brewed:
                <input  type="text" onChange={(e)=>{setFirst_brewed(e.target.value)}}/>
            </label>
            <label className="label-item">
                Brewer's Tips:
                <input type="text" onChange={(e)=>{setBrewers_tips(e.target.value)}}/>
            </label>
            <label className="label-item">
                Attenuation Level:
                <input type="number" onChange={(e)=>{setAttenuation_level(e.target.value)}}/>
            </label>
            <label className="label-item">
                Contributed By:
                <input type="text" onChange={(e)=>{setContributed_by(e.target.value)}}/>
            </label>
            
            <button>Add Beer</button>
        </form>

    </div>
  )
}

export default AddBeerPage