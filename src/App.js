import React, { Component } from 'react';
import Router from './Router';
import axios  from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      random: [],
      form: {
        name:              '',
        tagline:           '',
        description:       '',
        first_brewed:      '',
        brewers_tips:      '',
        attenuation_level: 0,
        contributed_by:    ''
      },
      home : false
    }
  }

  componentWillMount() {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
         .then(res => this.setState({beers: res.data}))
         .catch(err => console.log(err));

    this.getRandom();
  }

  getRandom = () => {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
         .then(res => this.setState({random: res.data}))
         .catch(err => console.log(err));
  }

  changeHandler = e => {
    let {form} = this.state,
        field  = e.target.name;

    form[field] = e.target.value;

    this.setState({form});
  }

  submitHandler = e => {
    e.preventDefault();

    let {form} = this.state;

    axios.post(`https://ironbeer-api.herokuapp.com/beers/new`, form)
         .then( () => {
            form = {
              name:              '',
              tagline:           '',
              description:       '',
              first_brewed:      '',
              brewers_tips:      '',
              attenuation_level: 0,
              contributed_by:    ''
            };
            this.componentWillMount();
         })
         .catch(err => console.log(err));
  }

  searchHandler = e => {
    const query = e.target.value;

    if (query.length > 0) {
      axios.get(`https://ironbeer-api.herokuapp.com/beers/search?q=${query}`)
           .then(res => this.setState({beers: res.data}))
           .catch(err => console.log(err));  
    } else { this.componentWillMount() }
  }

  render() {
    return (
      <div>
        <Router
          beers     = {this.state.beers}
          getRandom = {this.getRandom}
          random    = {this.state.random}
          onChange  = {this.changeHandler}
          onSubmit  = {this.submitHandler}
          onSearch  = {this.searchHandler}
        />
      </div>
    );
  }
}

export default App;