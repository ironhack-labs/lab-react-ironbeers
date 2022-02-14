import { useState } from "react";
import Navbar from "../../components/Navbar";
import { newBeer } from "../../utils/apiCall";

function NewBeer() {
    const [values, setValues] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        newBeer(values)
    }

  return (
    <div>
      <Navbar />
      <h1>Add A New Beer</h1>
      <form onSubmit={handleSubmit} style={{ textAlign: "right" }}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleInput}
          />
        </div>

        <div>
          <label>Tagline: </label>
          <input
            type="text"
            name="tagline"
            value={values.tagline}
            onChange={handleInput}
          />
        </div>

        <div>
          <label>description: </label>
          <textarea
            type="text"
            name="description"
            rows={5}
            value={values.description}
            onChange={handleInput}
          />
        </div>

        <div>
          <label>First Brewed: </label>
          <input
            type="text"
            name="first_brewed"
            value={values.first_brewed}
            onChange={handleInput}
          />
        </div>

        <div>
          <label>Brewer Tips: </label>
          <input
            type="text"
            name="brewers_tips"
            value={values.brewers_tips}
            onChange={handleInput}
          />
        </div>

        <div>
          <label>Attenuation Level: </label>
          <input
            type="number"
            name="attenuation_level"
            value={values.attenuation_level}
            onChange={handleInput}
          />
        </div>

        <div>
          <label>Contributed By:</label>
          <input
            type="text"
            name="contributed_by"
            value={values.contributed_by}
            onChange={handleInput}
          />
        </div>

        <button type="submit">Create New Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;