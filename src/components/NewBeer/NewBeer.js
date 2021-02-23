import React from 'react';
import axios from 'axios';
import './NewBeer.css';
//import { Route } from 'react-router-dom';

class Home extends React.Component {
  state = {
    beers: [],
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };
  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/').then((response) => {
      const beers = response.data;
      console.log('Radom Beer Page: ', beers);
      this.setState({ beers });
    });
  }
  //handleChange = ({ target }) =>
  //  setState({ ...state, [target.name]: target.value });

  newBeers = (e) => {
    //  e.preventDefault();
    //  try {
    //    const {
    //      name,
    //      attenuation_level,
    //      tagline,
    //      first_brewed,
    //      description,
    //      contributed_by,
    //    } = req.body;
    //    const newBeer = await axios.create({
    //      name,
    //      attenuation_level,
    //      tagline,
    //      first_brewed,
    //      description,
    //      contributed_by,
    //    });
    //    console.log('New beer:', newBeers);
    //    res.redirect('/beers');
    //  } catch (err) {
    //    console.error(err);
    //  }
    return (
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Tagline:</label>
        <input type="text" name="tagline" />
        <label>Description:</label>
        <input type="text" name="description" />
        <label>First Brewed:</label>
        <input type="text" name="first_brewed" />
        <label>Brewers Tips:</label>
        <input type="text" name="brewers_tips" />
        <label>Attenuation Level:</label>
        <input type="number" name="name" />
        <label>Contributed by:</label>
        <input type="text" name="contributed_by" />
        <button type="submit">Add New</button>
      </form>
    );
  };

  render() {
    console.log('ALL: ', this.alllBeers);
    return <div>{this.newBeers()}</div>;
  }
}

export default Home;
