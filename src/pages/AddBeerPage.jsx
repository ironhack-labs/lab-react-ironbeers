import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {

  const formInitial = {
      name: "", 
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: "",
  }

  const navigation = useNavigate();

  const [addBeer,  setAddBeer] = useState(formInitial);

  

  const handleInputChange = (event) => {

   const { name, value } = event.target;

   setAddBeer(prevState => ({
      ...prevState,
      [name] : value
   }));
  };

  //const luisLoVaaEntender = () =>  ({"hola":"adios"})

  /*event : {
    target : {
      name: name
      value: {addBeer.name}
    }
  }*/

  const handleSubmit = async (event) => {
    
    event.preventDefault();

    const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers/new';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addBeer),
      });
      const data = await response.json();
      if (data){
        console.info(data);
        navigation("/beers");
      }
    } catch(error) {
      console.error('Error: ', error)
    }

  }

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column gap-3 pt-4">
      
        <input 
          type="text"
          name="name"
          placeholder="Name"
          value={addBeer.name}
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
            name="tagline"
            placeholder="Tagline"
            value={addBeer.tagline}
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
            className="text-end"
            onChange={handleInputChange}
          />
          <input 
            type="text" 
            name="contributed_by"
            placeholder="Contributed by"
            value={addBeer.contributed_by}
            onChange={handleInputChange}

          />
      <div className="d-flex justify-content-center"> 
        <button className="btn btn-success mt-2" style={{width:"fit-content"}} type="submit">Add New Beer</button>
      </div>   
    </form>
  )

}


export default AddBeerPage;
