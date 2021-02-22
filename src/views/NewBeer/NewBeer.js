import React from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';

function NewBeer() {
  const firstValue = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewed_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };
  const [form, setForm] = React.useState(firstValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    pushBeer();
    setForm(firstValue);
  };
  const pushBeer = async () => {
    try{
      await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
      ...form,
    });
    } catch(e){
      console.error(e)
    }
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <NavBar />
      <form style={{display: 'flex', flexDirection:'column', width:'100%'}}onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        ></input>
        <label>Tagline</label>
        <input
          name="tagline"
          type="text"
          value={form.tagline}
          onChange={handleChange}
        ></input>
        <label>Description</label>
        <input
          name="description"
          type="text"
          value={form.description}
          onChange={handleChange}
        ></input>
        <label>First brewed</label>

        <input
          name="first_brewed"
          type="text"
          value={form.first_brewed}
          onChange={handleChange}
        ></input>
        <label>Brewed Tips</label>
        <input
          name="brewed_tips"
          type="text"
          value={form.brewed_tips}
          onChange={handleChange}
        ></input>
        <label>Attenuation Level</label>
        <input
          name="attenuation_level"
          type="number"
          value={form.attenuation_level}
          onChange={handleChange}
        ></input>
        <label>Contributed by</label>
        <input
          name="contributed_by"
          type="text"
          value={form.contributed_by}
          onChange={handleChange}
        ></input>
        <button>ADD NEW</button>
      </form>
    </div>
  );
}
export default NewBeer;
