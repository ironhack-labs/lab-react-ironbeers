import { useState } from "react";
import Head from "./Head";

const CreateNewBeer = ({onAdd}) =>{

const[name, setName] = useState('');
const[tagline, setTagline] = useState('');
const[description, setDescription] = useState('');
const[first_brewed, setFirst_brewed] = useState('');
const[brewers_tips, setBrewers_tips] = useState('');
const[attenuation_level, setAttenuation_level] = useState('');
const[contributed_by, setContributed_by] = useState('');
const[_id, set_id] = useState('');



const onSubmit = (e) => {
    e.preventDefault()

    if(!name){
        alert('Please add a beer')
        return
    }
    onAdd({name, tagline, description, first_brewed, brewers_tips, attenuation_level,contributed_by,_id});
    const newId = Math.floor(Math.random() * (1000 - 5 + 1)) + 5;

    console.log(newId)
    let newIdSt = newId.toString()
    console.log(newIdSt);

    setName('');
    setTagline('');
    setDescription('');
    setFirst_brewed('');
    setBrewers_tips('');
    setAttenuation_level('');
    setContributed_by('');
    set_id({newIdSt});
}

return(
    <div>
        <Head/>
        <form className="add-new-beer" onSubmit={onSubmit}>
       <div>
       <div className="form">
        <label>Name</label>
        <input type='text' placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div className="form">
        <label>Tagline</label>
        <input type='text' placeholder=""
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
        /> 
       </div> 
       <div className="form">
        <label>Description</label>
        <input type='text' placeholder=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        </div>
        <div className="form">
        <label>First Brewed</label>
        <input type='text' placeholder=""
            value={first_brewed}
            onChange={(e) => setFirst_brewed(e.target.value)}
        /> 
       </div>
       <div className="form">
        <label>Brewers Tips</label>
        <input type='text' placeholder=""
            value={brewers_tips}
            onChange={(e) => setBrewers_tips(e.target.value)}
        /> 
       </div>
       <div className="form">
        <label>Attenuation Level</label>
        <input type='text' placeholder=""
            value={attenuation_level}
            onChange={(e) => setAttenuation_level(e.target.value)}
        /> 
       </div>
       <div className="form">
        <label>Contributed By</label>
        <input type='text' placeholder=""
            value={contributed_by}
            onChange={(e) => setContributed_by(e.target.value)}
        /> 
       </div>
       <input type='submit' value='ADD NEW' className="form-btn"/>
       </div>
    </form>
    </div>
   
)
}
export default CreateNewBeer;