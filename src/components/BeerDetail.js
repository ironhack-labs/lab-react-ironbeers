import React, { Component } from 'react'
import axios from 'axios'

export default class BeerDetail extends Component {
        state = {
        beer: null
      }
      
      getBeerData = () => {
          console.log('get beer data');
          
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
        .then(res => {
            const beer = res.data
            this.setState({
                beer: beer
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
          this.getBeerData();
        }
      }

    render() {
        console.log(this.props.match.params.id);
        const myBeer = this.state.beer
        if (!this.state.beer) return (<div>Loading..</div>)
        return (
            <div className="single-beer-container">
                <ul>
                    <li><img src={myBeer.image_url} alt="" style={{'width':'60px'}}/></li>
                    <li>
                    {myBeer.name}
                    </li>
                    <li>
                    {myBeer.tagline}
                    </li>
                    <li>
                    First brewed: {myBeer.first_brewed}
                    </li>
                    <li>
                    Attenuation level: {myBeer.attenuation_level}
                    </li>
                    <li>
                    Description {myBeer.description}
                    </li>
                    <li>
                    Contributed by: {myBeer.contributed_by}
                    </li>
                </ul>
                
            </div>
        )
    }
}
