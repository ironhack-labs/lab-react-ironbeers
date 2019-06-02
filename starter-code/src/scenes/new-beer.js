import React, {Component, Fragment} from 'react'
import Navbar from '../components/navbar'
import BeerService from '../services/BeersService'
import Field from '../components/field'
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
    errors : {},
    error: true
  }
  handleChange = (name, field, error) => { 
    const validation = !Object.values(this.state.errors).reduce((prv, crt)=> prv && crt, true)
    this.setState({
      beer: {...this.state.beer, [name]: field},
      errors: {...this.state.errors, [name]: error},
      error: validation
    })
    console.log(validation)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    BeerService.newBeer(this.state.beer)
      .then(
        res => console.log(res), //redirect. 
        err => console.error(err)
      )
  }

  render () {
    return (
      <Fragment>
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
            validation = {value=>isNaN(value)}
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