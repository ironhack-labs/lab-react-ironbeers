import axios from "axios";
import {useState} from "react"
import { useNavigate } from "react-router-dom";


function AddBeerPage() {
const [beerName, setName] = useState("")
const [tagline, setTagline] = useState("")
const [description, setDescription] = useState("")
const [firstBrewDate, setFirstBrewDate] = useState("")
const [brewersTips, setBrewersTips] = useState("")
const [attenuationLevel, setAttenuationLevel] = useState("")
const [contributor, setContributor] = useState("")

const navigate = useNavigate(); 

const createBeer = (e) => {
    e.preventDefault();
    const body = { 
        name: beerName, 
        tagline: tagline, 
        description : description,
        first_brewed : firstBrewDate,
        brewers_tips : brewersTips, 
        attenuation_level : attenuationLevel,
        contributed_by : contributor,
     };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then(() => {

        // Reset the state
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewDate("")
        setBrewersTips("");
        setAttenuationLevel(1);
        setContributor("")

        navigate('/');

      });

  };

return (
  <div className="AddBeerPage">
    <h3>Add New Beer</h3>

    <form onSubmit={createBeer}>
      <label>Name</label>

      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        value={beerName}
      />

      <label>Tagline</label>

      <input
        type="text"
        name="tagline"
        onChange={(e) => setTagline(e.target.value)}
        value={tagline}
      />
      <label>Description</label>

      <textarea
        type="text"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <label>First Brewed</label>

      <input
        type="text"
        name="first_brewed"
        onChange={(e) => setFirstBrewDate(e.target.value)}
        value={firstBrewDate}
      />
      <label>Brewer's Tips</label>

      <input
        type="text"
        name="brewers_tips"
        onChange={(e) => setBrewersTips(e.target.value)}
        value={brewersTips}
      />
      <label>Attenuation level</label>

      <input
        type="number"
        name="attenuation_level"
        onChange={(e) => setAttenuationLevel(e.target.value)}
        value={attenuationLevel}
      />
      <label>Contributed By</label>

      <input
        type="text"
        name="contributed_by"
        onChange={(e) => setContributor(e.target.value)}
        value={contributor}
      />

      <button type="submit">Add Beer</button>
    </form>
  </div>
);
}
export default AddBeerPage;
