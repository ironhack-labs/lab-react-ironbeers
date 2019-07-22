import React, { createContext, Component } from 'react'
import axios from 'axios'

export const MyContext = createContext()

export default class ContextProvider extends Component {
  state = {
    beers: [],
    randomBeer: {},
    beer: {}
  }
  componentDidMount(props) {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers')
      .then(({ data }) => {
        this.setState(prev => ({ beers: [...prev.beers, ...data] }))
      })
      .catch(err => console.log(err))
  }

  render() {
    const { beers, beer } = this.state

    return <MyContext.Provider value={{ state: this.state, beers, beer }}>{this.props.children}</MyContext.Provider>
  }
}
