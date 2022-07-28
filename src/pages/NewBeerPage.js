import axios from "axios";
import { useState } from "react";
import Header from "../components/Header";

function NewBeerPage() {
  const [beerFormState, setBeerFormState] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const [message, setMessage] = useState(null);

  const updateBeerFormState = (event) =>
    setBeerFormState({
      ...beerFormState,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  const handleNewBeerSubmit = event => {
    event.preventDefault();

    const requestBody = {
      ...beerFormState,
      attenuation_level: Number(beerFormState.attenuation_level)
    }

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', requestBody)
      .then(response => {
        setMessage(response.data.message)
        setBeerFormState({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: "",
          contributed_by: "",
        });
      })
      .catch(err => {
        console.log(err.response.data.message);
        setMessage(err.response.data.message);
      })

  }

  return (
    <div>
      <Header />
      <h1>Create A Beer!</h1>
      <form onSubmit={handleNewBeerSubmit}>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={beerFormState.name}
            onChange={updateBeerFormState}
          />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            value={beerFormState.tagline}
            onChange={updateBeerFormState}
          />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <label>Description</label> 
          <textarea
            name="description"
            value={beerFormState.description}
            onChange={updateBeerFormState}
          ></textarea>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <label>First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            value={beerFormState.first_brewed}
            onChange={updateBeerFormState}
          />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <label>Brewers Tips</label>
          <input
            type="text"
            name="brewers_tips"
            value={beerFormState.brewers_tips}
            onChange={updateBeerFormState}
          />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <label>Attenuation Level</label>
          <input
            type="text"
            name="attenuation_level"
            value={beerFormState.attenuation_level}
            onChange={updateBeerFormState}
          />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewBeerPage;
