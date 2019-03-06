import React, { Component } from 'react';
import { ListBeers, searchBeer } from '../../services/BeerService'
import ListItem from '../beers/ListItem'

export default class Home extends Component {

  state= {
    beers: [],
    error: false,
    search: ''
  }

  componentDidMount = () => {
    ListBeers()
      .then(response => {
          this.setState({
            beers: response.data
          })
        },
        err => {
          if (err) {
            this.setState({
              error: true
            })
          }
        }
      )
  }

  onChangeSearch = (e) => {
    this.setState({
      search: e.target.value
    }, () => {
      if (this.state.search !== '') {
        searchBeer(this.state.search)
          .then(response => {
              this.setState({
                beers: response.data
              })
            },
            err => {
              if (err) {
                this.setState({
                  error: true
                })
              }
            }
          )
      } else if (this.state.search === '') {
        this.componentDidMount()
      }
    })
  }

  render = ()=> {
    if(this.state.error){
     return <h1>Some Bad request from the server :(</h1>
    } else {
      return (
        <div className='has-margin-top-20'>
          <div className="panel-block">
            <p className="control has-icons-left">
            <input className="input " type="text" placeholder="search" value={this.state.search} onChange={this.onChangeSearch}/>
            <span className="icon is-small is-left">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <div className='has-margin-top-15'>
        {this.state.beers.map(beer => 
           <ListItem {...beer}></ListItem>
              )}
        </div>
      </div>
      );
    }
  }
}