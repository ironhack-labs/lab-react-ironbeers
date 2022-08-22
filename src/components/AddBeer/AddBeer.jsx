import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


function AddBeer() {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [brewersTips, setBrewersTips] = useState('');
    const [attenuation, setAttenuation] = useState(0);
    const [contributedBy, setcontributedBy] = useState('');

    const navigate = useNavigate();
      
    const handleName = (e) => setName(e.target.value);
    const handleTagline = (e) => setTagline(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
    const handleBrewersTips = (e) => setBrewersTips(e.target.value);
    const handleAttenuation = (e) => setAttenuation(e.target.value);
    const handleContributedBy = (e) => setcontributedBy(e.target.value);

    const handleSubmit = (e) => {
          e.preventDefault();
      
          const newBeer = { name, tagline, description, firstBrewed, brewersTips, attenuation, contributedBy};
      
          //sends the object to the API
          //This means that the API will update itself with this information
          axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then((response) => {
            console.log(response);
            setName('');
            setTagline('');
            setDescription('');
            setFirstBrewed('');
            setBrewersTips('');
            setAttenuation(0);
            setcontributedBy('');
      
            navigate('/');
          });
        };
      
        return (
          <div className="AddBeer">
            <h3>Add New Beer</h3>

            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" value={name} onChange={handleName} />

              <label htmlFor="tagline">Tagline:</label>
              <input type="text" name="tagline" value={tagline} onChange={handleTagline} />

              <label htmlFor="description">Description</label>
              <input type="text" name="description" value={description} onChange={handleDescription} />

              <label htmlFor="firstBrewed">First Brewed:</label>
              <input type="text" name="firstBrewed" value={firstBrewed} onChange={handleFirstBrewed} />

              <label htmlFor="brewersTips">Brewers Tips:</label>
              <input type="text" name="brewersTips" value={brewersTips} onChange={handleBrewersTips} />
      
              <label htmlFor="attenuation">Attenuation:</label>
              <input type="number" name="attenuation" value={attenuation} onChange={handleAttenuation} />

              <label htmlFor="contributedBy">Contributed by:</label>
              <input type="text" name="contributedBy" value={contributedBy} onChange={handleContributedBy} />
      
              <button type="submit">ADD NEW</button>
            </form>
          </div>
        );
      }

export default AddBeer