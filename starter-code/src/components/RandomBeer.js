import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Header from './Header'


class RandomBeer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            beers: [],
            ready: true,
        };
    }

    componentDidMount() {
        axios.get('https://sample-api-ih.herokuapp.com/')
            .then(res => {
                this.setState({
                    beers: res.data,
                    ready: false
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    renderRandomBeer = () => {
        let number = Math.floor(Math.random() * this.state.beers.length-1);
        let randomBeer = this.state.beers[number];

        return(
            
               
            <div class="col s12 m4">
            {
                this.state.ready ?
                <p>Loading...</p>
                :
                <div class="card horizontal">
                    <div class="card-image">
                        <img src={randomBeer.image_url} alt="beer-img" />
                    </div>
                <div class="card-stacked">
                    <div class="card-content">
                    <p>{randomBeer.name}</p>
                    </div>
                   
                </div>
                </div>
            }
        </div>
       
        )

    }

    render() {

        return (
            <div>  <Header />
            <div className="container">
                <div className="row">
                    {this.renderRandomBeer()}
                </div>
            </div>
            </div>
        )
    }
}
export default RandomBeer;