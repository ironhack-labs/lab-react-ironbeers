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
      contributed_by: ""
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
    <form onSubmit={handleSubmit} className="d-flex flex-column gap-3 pt-4 container">

        <div className="d-flex flex-column">
          <label className="mx-3" htmlFor="name"><strong>Name</strong></label>
          <input 
            id="name"
            className="input"
            type="text"
            name="name"
            value={addBeer.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="d-flex flex-column">
          <label className="mx-3" htmlFor="tagline"><strong>Tagline</strong></label>  
          <input 
            id="tagline"
            className="input"
            type="text"
            name="tagline"
            value={addBeer.tagline}
            onChange={handleInputChange}  
          />
        </div>
    
        <div className="d-flex flex-column">
          <label className="mx-3 "  htmlFor="description"><strong>Description</strong> </label>
          <textarea
            style={{height: "100px"}}
            id="description"
            className="textarea container"
            name="description"
            value={addBeer.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="d-flex flex-column">
          <label className="mx-3 " htmlFor="first_brewed"><strong>First Brewed</strong> </label>
          <input 
            id="first_brewed"
            className="input"
            type="text"
            name="first_brewed"
            value={addBeer.brewers_brewed}
            onChange={handleInputChange}
          />
        </div>

        <div className="d-flex flex-column">
          <label className="mx-3 " htmlFor="first_tips"><strong>First Tips</strong></label>
          <input 
            id="first_tips"
            className="input"
            type="text"
            name="brewers_tips"
            value={addBeer.brewers_tips}
            onChange={handleInputChange}
          />
        </div>
        

        <div className="d-flex flex-column">
          <label className="mx-3 " htmlFor="attenuation_level"><strong>Attenuation Level</strong></label>
          <input 
            id="attenuation_level"
            type="number" 
            name="attenuation_level"
            value={addBeer.attenuation_level}
            className="text-end input"
            onChange={handleInputChange}
          />
        </div>
       

        <div className="d-flex flex-column">
          <label className="mx-3" htmlFor="contributed_by"><strong>Contributed By</strong></label>
          <input 
            id="contributed_by"
            className="input"
            type="text" 
            name="contributed_by"
            value={addBeer.contributed_by}
            onChange={handleInputChange}
          />
        </div>
        
      {/* <div className="d-flex justify-content-center">  */}
        <button className="btn add-btn mt-2 container"  type="submit">Add New Beer</button>
      {/* </div>    */}
    </form>
  )

}


export default AddBeerPage;
