import React, { Component } from 'react'
import axios from 'axios'
import {Link, Route} from 'react-router-dom'
import './Beers.css';

export default class Beers extends Component {
    state = {
        beers: [],
        query: ''
      }
      
      getBeerData = () => {
          console.log('get beer data');
          
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(res => {
            const beers = res.data
            this.setState({
                beers: beers
            })
        })
      }
      componentDidMount() {
        console.log('component mount');
        this.getBeerData();
      }

      componentDidUpdate(prevProps) {
        // console.log('current props:', this.props.match)
        // console.log('previous props:', prevProps.match)
        if (prevProps.match.params.id !== this.props.match.params.id) {
            console.log('updating?')
          this.getBeerData();
        }
      }

      queryHandler = (event) => {
        //   console.log(event.target.value)
        this.setState({
            query: event.target.value
        })
      }

    render() {
        const filtered = [...this.state.beers].filter(beer => {
            return beer.name.includes(this.state.query)
        })

        if (this.state.beers.length == 0){
            console.log(this.state.beer)
            return (<p>Loading...</p>)
        }
        return (
            <div>
                Looking for a specific beer?
                <div>
                <input type="text" value={this.state.query} name="query" id="" onChange={this.queryHandler}/>
                </div>
                Here is your beer:
                {filtered.map(beer => {
                    return (
                        <div key={beer._id} className="beer-container">
                            <div>
                            <img src={beer.image_url} alt="" style={{'width':'80px'}}/>
                            </div>
                            <div>
                            <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                            <p>{beer.tagline}</p>
                            <p>{beer.contributed_by}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
