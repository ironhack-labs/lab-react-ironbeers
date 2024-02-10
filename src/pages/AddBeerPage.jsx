import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeerPage() {

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [firstBrewed, setFirstBrewed] = useState('')
    const [brewersTips, setBrewersTips] = useState('')
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [contributedBy, setContributedBy] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        const newBeer = {name:name, tagline:tagline, description:description, firstBrewed:firstBrewed, brewersTips:brewersTips, attenuationLevel:attenuationLevel, contributedBy:contributedBy}

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
        .then((beer)=>{
            navigate(`/beers/${beer.data._id}`)
            console.log(beer)
        })
        .catch(()=>{
            
        })
    }


    return(
        <div className="create-beer-form">
            <form onSubmit={handleSubmit}>                
                <label>Name
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </label>
                
                <label>Tagline
                    <input type="text" onChange={(e) => setTagline(e.target.value)} />
                </label>
                
                <label>Description
                    <input type="text" onChange={(e) => setDescription(e.target.value)} />
                </label>
                                
                <label>First Brewed
                    <input type="text" onChange={(e) => setFirstBrewed(e.target.value)} />
                </label>               
                
                <label>Brewer's Tips
                    <input type="text" onChange={(e) => setBrewersTips(e.target.value)} />
                </label>
                              
                <label>Attenuation Level
                    <input type="number" onChange={(e) => setAttenuationLevel(e.target.value)} />
                </label>
                               
                <label>Contributed By
                    <input type="text" onChange={(e) => setContributedBy(e.target.value)} />
                </label>
                
                <button>ADD BEER</button>
            </form>
        </div>
    )
}

export default AddBeerPage;
