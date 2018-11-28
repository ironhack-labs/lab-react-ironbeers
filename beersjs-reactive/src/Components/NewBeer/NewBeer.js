import React, {Component} from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import Form from './Form';

class NewBeer extends Component{
  constructor(){
    super();
    this.state = {
      form:{
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const base_url = 'https://ironbeer-api.herokuapp.com/beers';
    const {form} = this.state

    axios.post(`${base_url}/new`, form)
      .then(res => {
        const {form} = res.config.data;
        alert(res.data.message)
        this.setState({form})
        this.props.history.push('/');
      })
      .catch(err => {
        console.log('Error =====>',err)
      });
  }

  handleChange = (e) => {
    const {form} =this.state;
    let field = e.target.name;
    form[field] = e.target.value;
    this.setState({form})
    console.log('Form =====>', form)
  }

  render(){
    let {form} = this.state;
    return(
      <section>
        <Header />
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...form}/>
      </section>
    )
  }
}

export default NewBeer;