import React, {Component, Fragment} from 'react'
import Navbar from '../components/navbar'
import BeerService from '../services/BeersService'
import Field from '../components/field'
import { Redirect } from 'react-router-dom'

class New extends Component {
  state = {
    beer: {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: "",
    },
    errors : {
      name:  false,
      tagline:  false,
      description:  false,
      first_brewed:  false,
      brewers_tips:  false,
      attenuation_level:  false,
      contributed_by:  false,
    },
    error: true, 
    redirect: false
  }
  handleChange = (name, field, error) => { 
    // returns true if all the values are false. 
    this.setState({
      beer: {...this.state.beer, [name]: field},
      errors: {...this.state.errors, [name]: !error},
    }, () => {
      const hasError = !Object.values(this.state.errors).reduce((prv, crt)=> prv && crt, true)
      this.setState({error: hasError})
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    BeerService.newBeer(this.state.beer)
      .then(
        res => this.setState({redirect: true}), //redirect. 
        err => console.error(err)
      )
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/all' />
    }
  }

  render () {
    // console.log(this.state.errors)
    return (
      <Fragment>
      {this.renderRedirect()}
      <Navbar />
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <Field  
            validation = {value=>value.length <= 1}
            handleParent = {(n, v, e)=>this.handleChange(n, v, e)}
            name = 'name' label = 'Beer name'
            />
          <Field  
            validation = {value=>value.length <= 1}
            handleParent = {(n, v, e)=>this.handleChange(n, v, e)}
            name = 'tagline' label = 'Tagline'
            />
          <Field  
            validation = {value=>value.length <= 1}
            handleParent = {(n, v, e)=>this.handleChange(n, v, e)}
            name = 'description' label = 'Description'
            />
          <Field  
            validation = {value=>value.length <= 1}
            handleParent = {(n, v, e)=>this.handleChange(n, v, e)}
            name = 'first_brewed' label = 'First brewed'
            />
          <Field  
            validation = {value=>value.length <= 1}
            handleParent = {(n, v, e)=>this.handleChange(n, v, e)}
            name = 'brewers_tips' label = 'Brewers Tips'
            />
          <Field  
            validation = {value=> isNaN(value) || value.length <=1}
            handleParent = {(n, v, e)=>this.handleChange(n, v, e)}
            name = 'attenuation_level' label = 'Attenuation Level'
            />
          <Field  
            validation = {value=>value.length <= 1}
            handleParent = {(n, v, e)=>this.handleChange(n, v, e)}
            name = 'contributed_by' label = 'Contributed by'
            />
          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={this.state.error}
            >
            Search
          </button>

        </form>
      </div>
      </Fragment>
    )
  }

}

export default New