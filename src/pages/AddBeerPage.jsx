import Navbar from '../components/Navbar';
import { useState, useNavigate } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function AddBeerPage() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirst_Brewed] = useState('');
  const [brewers_tips, setBrewers_Tips] = useState('');
  const [attenuation_level, setAttenuation_Level] = useState(0);
  const [contributed_by, setContributed_By] = useState('');

  // const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirst_Brewed = (e) => setFirst_Brewed(e.target.value);
  const handleBrewers_Tips = (e) => setBrewers_Tips(e.target.value);
  const handleAttenuation_Level = (e) => setAttenuation_Level(e.target.value);
  const handleContributed_By = (e) => setContributed_By(e.target.value);

  const apiURL = 'https://ih-beers-api2.herokuapp.com/beers/new';

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    axios
      .post({ apiURL }, newBeer)
      .then(() => {
        setName('');
        setTagline('');
        setDescription('');
        setFirst_Brewed('');
        setBrewers_Tips('');
        setAttenuation_Level(0);
        setContributed_By('');

        // navigate('/');
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  };

  return (
    <>
      <Navbar />

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            style={{ marginBottom: '20px', padding: '5px' }}
            className="form-control"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleName}
          />
        </div>

        <div>
          <label>Tagline</label>
          <input
            style={{ marginBottom: '20px', padding: '5px' }}
            className="form-control"
            type="text"
            name="tagline"
            placeholder="Tagline"
            value={tagline}
            onChange={handleTagline}
          />
        </div>
        <div>
          <label className="form-label">Description</label>
          <textarea
            style={{ margin: '0px', padding: '5px' }}
            className="form-control"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={description}
            onChange={handleDescription}></textarea>
        </div>

        <div>
          <label>First Brewed</label>
          <input
            style={{ marginBottom: '20px', padding: '5px' }}
            className="form-control"
            type="text"
            name="first_brewed"
            placeholder="First Brewed"
            value={first_brewed}
            onChange={handleFirst_Brewed}
          />
        </div>
        <div>
          <label>Brewer Tips</label>
          <input
            style={{ marginBottom: '20px', padding: '5px' }}
            className="form-control"
            type="text"
            name="brewers_tips"
            value={brewers_tips}
            onChange={handleBrewers_Tips}
          />
        </div>
        <div>
          <label>Attenuation Level</label>
          <input
            style={{ marginBottom: '20px', padding: '5px' }}
            className="form-control"
            type="number"
            name="attenuation_level"
            value={attenuation_level}
            onChange={handleAttenuation_Level}
          />
        </div>
        <div>
          <label>Created By</label>
          <input
            style={{ marginBottom: '20px', padding: '5px' }}
            className="form-control"
            type="text"
            name="contributed_by"
            placeholder="Created by"
            value={contributed_by}
            onChange={handleContributed_By}
          />
        </div>
        <button
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            fontSize: '16px',
          }}>
          Add Beer
        </button>
      </form>

      {/* <Form onSubmit={handleSubmit}>
        <h1>Add new Beer</h1>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Name" type="text" name="name" value={name} onChange={handleName} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tagline</Form.Label>
          <Form.Control placeholder="Tagline" type="text" name="tagline" value={tagline} onChange={handleTagline} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            placeholder="Description"
            name="description"
            value={description}
            onChange={handleDescription}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>First Brewed</Form.Label>
          <Form.Control placeholder="First Brewed" type="text" name="first_brewed" value={first_brewed} onChange={handleFirst_Brewed} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Brewer's Tips</Form.Label>
          <Form.Control placeholder="Brewer's Tips" type="text" name="brewers_tips" value={brewers_tips} onChange={handleBrewers_Tips} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Attenuation Level</Form.Label>
          <Form.Control
            placeholder="Attenuation Level"
            type="number"
            name="attenuation_level"
            value={attenuation_level}
            onChange={handleAttenuation_Level}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contributed By</Form.Label>
          <Form.Control placeholder="Contributed By" type="text" name="contributed_by" value={contributed_by} onChange={handleContributed_By} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Beer
        </Button>
      </Form> */}
    </>
  );
}

export default AddBeerPage;
