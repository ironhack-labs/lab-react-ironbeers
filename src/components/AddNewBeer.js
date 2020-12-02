import React, {useState} from 'react'
import axios from 'axios'
import Header from './Header'


const initialState = {
    name : "",
    tagline : "",
    description : "",
    first_brewed : "",
    brewers_tips : "",
    attenuation_level: 0,
    contributed_by :""
  };
  const AddNewBeer = (props) =>{
    const [formState, setFormState] = useState(initialState);
    const handleInputChange = (event) => {
      let { name, value} = event.target;
        setFormState({ ...formState, [name]: value});
        
      };
function addNewBeer(event) {
  event.preventDefault();
  axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', formState)
      .then(() => {
        console.log(`New beer added`)
      })
      .catch((error) => error);
    setFormState(initialState);
}
  return (
    <div>
        <h1>Add New Beer</h1>
        <Header /> 
        <div>
          <form onSubmit={addNewBeer}>
            <div className="control">
              <input className="input" 
                type="text"
                name="name"
                placeholder="Enter Beer Name"
                value={formState.name}
                onChange={handleInputChange}
                />
            </div>
            <div className="control">
              <input className="input" 
                type="text"
                name="tagline"
                placeholder="Enter Tagline"
                value={formState.tagline}
                onChange={handleInputChange}
                />
            </div>
            <div className="control">
              <input className="input" 
                type="text"
                name="description"
                placeholder="Your description here"
                value={formState.description}
                onChange={handleInputChange}
                />
            </div>
            <div className="control">
              <input className="input" 
                type="text"
                name="first_brewed"
                placeholder="First brewed on ... MM/YYYY"
                value={formState.first_brewed}
                onChange={handleInputChange}
                />
            </div>
            <div className="control">
              <input className="input" 
                type="text"
                name="brewers_tips"
                placeholder="Brewers tips..."
                value={formState.brewers_tips}
                onChange={handleInputChange}
                />
            </div>
            <div className="control">
              <input className="input" 
                type="number"
                name="attenuation_level"
                placeholder="Attenuation Level...."
                value={formState.attenuation_level}
                onChange={handleInputChange}
                />
            </div>
            <div className="control">
              <input className="input" 
                type="text"
                name="contributed_by"
                placeholder="Your Name here..."
                value={formState.contributed_by}
                onChange={handleInputChange}
                />
            </div>
            <div className="control"> 
              <button className="button is-primary">Submit</button>
            </div>
          </form>
        </div>

    </div>
  )
};
export default AddNewBeer