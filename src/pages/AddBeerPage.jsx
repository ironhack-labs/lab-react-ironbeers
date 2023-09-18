import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {

    const [addBeer, setAddBeer] = useState({})
    const navigate = useNavigate()

    const handleChange = ({ target }) => {
        const {name, value} = target
        setAddBeer((newList) => ({
          ...newList,
          [name]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();

        console.log("adddd", addBeer);
        axios.post(`${import.meta.env.VITE_API_URL}/beers/new`, addBeer) 

        .then((response) => {
            console.log("h.s", response);
            navigate('/beers')
        }
        )
    
        .catch(e => console.log("error adding new beer", e))

      }


  return (
    <form onSubmit={handleSubmit}>
        <label> Name: 
            <input
                value={addBeer.name || ''}
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                />
        </label>
        <label> Tagline
            <input
                value={addBeer.tagline || ''}
                name="tagline"
                type="text"
                placeholder="Tagline"
                onChange={handleChange}
                />
        </label>
        <label> Description
            <textarea 
                value={addBeer.description || ''}
                name="description"
                type="text"
                placeholder="Description"
                onChange={handleChange}
                />
        </label>

        <label> First Brewed
            <input
                value={addBeer.first_brewed || ''}
                name="first_brewed"
                type="text"
                placeholder="First Brewed"
                onChange={handleChange}
                />
        </label>
        <label> Brewer's Tips
            <input
                value={addBeer.brewers_tips || ''}
                name="brewers_tips"
                type="text"
                placeholder="Brewer's Tips"
                onChange={handleChange}
                />
        </label>

        <label> Attenuation Level
            <input
                value={addBeer.attenuation_level || ''}
                name="attenuation_level"
                type="number"
                placeholder="Attenuation Level"
                onChange={handleChange}
                />
        </label>
        <label> Contributed By
            <input
                value={addBeer.contributed_by || ''}
                name="contributed_by"
                type="text"
                placeholder="Contributed By"
                onChange={handleChange}
                />
        </label>
    
      
      <button type="submit">Add Beer</button>
    </form>
    
  );
}

export default AddBeerPage;
