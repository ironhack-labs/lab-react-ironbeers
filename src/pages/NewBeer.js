import axios from 'axios';
import { useState} from 'react';
import NavBar from "../components/NavBar"

function NewBeer() {

const [beerFormState, setBeerFormState] = useState({
name: '',
tagline: '',
description:'',
first_brewed:'',
brewers_tips:'',
attenuation_level:'',
contributed_by: ''

});

const [message, setMessage] =useState(null);


const updateBeerFormState = event => setBeerFormState({
        ...beerFormState, [event.currentTarget.name]: event.currentTarget.value
        
    });

    const handleNewBeerSubmit = event => {
        event.preventDefault();

        const requestBody= {
            ...beerFormState, attenuation_level: Number(beerFormState.attenuation_level)
        }

axios.post('https://ih-beers-api2.herokuapp.com/beers/new', requestBody)
.then((response)=> setBeerFormState(response.data)) //check
.catch(err => console.log(err))

    }


    // const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by, updateName, updateTagline, updateDescription, updateFirst_brewed, updateBrewers_tips, updateAttenuation_level, updateContributed_by, handleSubmitBeer} = props

return(
    <>
<NavBar />
{/* <div className ="beerForm">
<form onSubmit={handleSubmitBeer}>
<h1>Add a Beer</h1>
<div>
      <label>Name</label>
      <input value={name} type="text" onChange={updateName} />
</div>

<div>
      <label>Tagline</label>
      <input value={tagline} type="text" onChange={updateTagline} />
</div>

<div>
      <label>Description</label>
      <input value={description} type="text" onChange={updateDescription} />
</div>

<div>
      <label>First Brewed</label>
      <input value={first_brewed} type="text" onChange={updateFirst_brewed} />
</div>

<div>
      <label>Brewer's Tips</label>
      <input value={brewers_tips} type="text" onChange={updateBrewers_tips} />
</div>

<div>
      <label>Attenuation Level</label>
      <input value={attenuation_level} type="number" onChange={updateAttenuation_level} />
</div>

<div>
      <label>Contributed By</label>
      <input value={contributed_by} type="text" onChange={updateContributed_by} />
</div>

      <button type="submit">Create</button>
    </form>
    </div> */}

</>
)
}
export default NewBeer;