import Header from '../components/Header';
import axios from 'axios';   
import { useState } from "react";    
const NewBeersPage = ()=>{
// const [name,setName] = useState('');
// const [tagline,setTagLine] = useState('');
// const [description, setDescription] = useState('')
// const [firstbrewed, setFirstBrewed] = useState('');
// const [brewerstips, setBrewersTips] = useState('');
// const [attenuationlevel, setAttenuationLevel] = useState(0);
// const [contributedby, setContributedBy] = useState('');

// generic way

const [newBeerObject, setNewBeerObject] = useState({
  name: '',
  tagline: '',
  description: '',
  first_brewed: '',
  brewers_tips: '',
  attenuation_level: 0,
  contributed_by: ''
})


const handleOnChange = (event)=> setNewBeerObject({
  ...newBeerObject, [event.target.name]:event.target.value
})


// const handleSubmit = (e) =>{

//   e.preventDefault();
//   const body={name:name, tag:tagline, description:description, firstbrewed:firstbrewed, brewerstips:brewerstips,attenuationlevel:attenuationlevel, contributedby:contributedby }

//   axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body )
// .then((response)=>{

//   setName('');
//   setTagLine('');
//   setDescription('');
//   setFirstBrewed('');
//   setBrewersTips('');
//   setAttenuationLevel(0);
//   setContributedBy('');
// })
// }

axios.post()



  return (
    // Finally, on the /new-beer route (remember, this is you react route, you're displaying the form on this route), we should render a form where user can create new beers. The form should include the following fields:


    <div>
    <Header/>

    <h3>Add A Beer</h3>
<form onSubmit={handleSubmit} >
  <label htmlFor="beerName">Name</label>

  <input type="text" 
  name="name"
  id="beerName"
  onChange={handleOnChange}
  
  value={newBeerObject.name}/>
  <label htmlFor="tagName">Tagline</label>
    <input type="text"
    id="tagName"
    name="tagline"
    onChange={handleOnChange} 
    value={newBeerObject.tagline}/>


<label htmlFor="beerDescription">Description</label>
<input type="text" id="beerDescription" name="description" onChange={handleOnChange } value={newBeerObject.description}/>


<label htmlFor="beerFirstBrewed">First Brewed</label>
<input type="text" id="beerFirstBrewed"  name="first_brewed" onChange={handleOnChange } value={newBeerObject.first_brewed}/>

<label htmlFor="BeerTips">Brewers Tips</label>
<input type="text" id="BeerTips"  name="brewers_tips" onChange={handleOnChange} value={newBeerObject.brewers_tips}/>
<label htmlFor="beerAttenuation">Attenuation Level</label>
<input type="number" id="beerAttenuation"  name="attenuation_level" onChange={handleOnChange } value={newBeerObject.attenuationlevel}/>

<label htmlFor="beerContributed">Contributed By</label>
<input type="text" id="beerContributed" name="contributed_by" onChange={handleOnChange } value={newBeerObject.contributedby}/>

<button type="submit">Add Beer</button>
  
</form>
</div>
  )
  
  }
  
  export default NewBeersPage