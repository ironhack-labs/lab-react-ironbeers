import { useState } from "react";

function AddBeerPage() {

  const [addBeer,  setAddBeer] = useState({
    name: "", 
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  });

  const handleInputChange = (event) => {

   const { name, value } = event.target;

   setAddBeer(prevState => ({
    ...prevState,
    [name] : value
   }));
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();

    const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers/new';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addBeer),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success: ', data );
      
    })
    .catch((error) => {
      console.error('Error: ', error)
    })

  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="name"
        placeholder="Name"
        value={addBeer.name}
        onChange={handleInputChange}
      />
      <input 
        type="text"
        name="tagline"
        placeholder="Tagline"
        value={addBeer.tagline}
        onChange={handleInputChange}  
      />
      <textarea
        name="description"
        placeholder="Description"
        value={addBeer.description}
        onChange={handleInputChange}
      />
      <input 
        type="text"
        name="brewers_tips"
        placeholder="Brewers Tips"
        value={addBeer.brewers_tips}
        onChange={handleInputChange}
      />
      <input 
        type="number" 
        name="attenuation_level"
        placeholder="Attenuation Level"
        value={addBeer.attenuation_level}
        onChange={handleInputChange}
      />
        <input 
        type="text" 
        name="contributed_by"
        placeholder="Contributed by"
        value={addBeer.contributed_by}
        onChange={handleInputChange}
      />
      <button type="submit">Add New</button>
    </form>
  )

}


export default AddBeerPage;
