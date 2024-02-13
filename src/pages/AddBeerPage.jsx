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
        <div className="container d-flex justify-content-center text-align-center">
            <form onSubmit={handleSubmit} className="form-inline m-4 fw-bold">
                <div>                
                <label>Name
                    <input className="m-3" type="text" onChange={(e) => setName(e.target.value)} />
                </label>
                </div>
                <div>
                <label>Tagline
                    <input className="m-3" type="text" onChange={(e) => setTagline(e.target.value)} />
                </label>
                </div>
                <div>
                <label>Description
                    <input className="m-3" type="text" onChange={(e) => setDescription(e.target.value)} />
                </label>
                </div>

                <div>                
                <label>First Brewed
                    <input className="m-3" type="text" onChange={(e) => setFirstBrewed(e.target.value)} />
                </label>
                </div>    

                <div>
                <label>Brewer's Tips
                    <input className="m-3" type="text" onChange={(e) => setBrewersTips(e.target.value)} />
                </label>
                </div>

                <div>      
                <label>Attenuation Level
                    <input className="m-3" type="number" onChange={(e) => setAttenuationLevel(e.target.value)} />
                </label>
                </div>  
                <div>        
                <label>Contributed By
                    <input className="m-3" type="text" onChange={(e) => setContributedBy(e.target.value)} />
                </label>
                </div>
                <div className="d-flex justify-content-center">
                <button className="btn btn-primary btn-lg m-2" >ADD BEER</button>
                </div>
            </form>
        </div>
    )
}

export default AddBeerPage;
