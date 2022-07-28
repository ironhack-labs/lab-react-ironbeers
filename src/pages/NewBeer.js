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


const updateBeerFormState = (event) =>
setBeerFormState({
  ...beerFormState,
  [event.currentTarget.name]: event.currentTarget.value,
});

    const handleSubmitBeer = event => {
        event.preventDefault();

        const requestBody= {
            ...beerFormState, attenuation_level: Number(beerFormState.attenuation_level)
        }

axios.post('https://ih-beers-api2.herokuapp.com/beers/new', requestBody)
.then((response)=> {
    setBeerFormState(response.data.message)
    setBeerFormState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: "",
      });
    }) //check
.catch(err => {console.log(err.response.data.message)
setMessage(err.response.data.message)
    });

    }

return(
    <>
<NavBar />
<div className ="beerForm">
<h1>Create A Beer!</h1>
      <form onSubmit={handleSubmitBeer}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={beerFormState.name}
            onChange={updateBeerFormState}
          />
        </div>
        <div>
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            value={beerFormState.tagline}
            onChange={updateBeerFormState}
          />
        </div>
        <div>
          <label>Description</label> 
          <textarea
            name="description"
            value={beerFormState.description}
            onChange={updateBeerFormState}
          ></textarea>
        </div>
        <div>
          <label>First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            value={beerFormState.first_brewed}
            onChange={updateBeerFormState}
          />
        </div>
        <div>
          <label>Brewers Tips</label>
          <input
            type="text"
            name="brewers_tips"
            value={beerFormState.brewers_tips}
            onChange={updateBeerFormState}
          />
        </div>
        <div>
          <label>Attenuation Level</label>
          <input
            type="text"
            name="attenuation_level"
            value={beerFormState.attenuation_level}
            onChange={updateBeerFormState}
          />
        </div>
        <div>
          <label>Contributed By</label>
          <input
            type="text"
            name="contributed_by"
            value={beerFormState.contributed_by}
            onChange={updateBeerFormState}
          />
        </div>
        {message && (
          <div>
            <p>{message}</p>
          </div>
        )}
       <div>
          <button className="newButton" type="submit">Submit</button>
</div>


      </form>
    </div>

</>
)
}
export default NewBeer;