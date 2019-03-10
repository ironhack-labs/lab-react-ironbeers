import React, { Component } from 'react';
import DetailedBeer from './DetailedBeer';


export default class Random extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          beer: {
            image_url:'',
            name:'',
            tagline:'',
            first_brewed:'',
            attenuation_level:'',
            description:'',
            contributed_by:''
          }
        };
    }

    componentDidMount() {
        fetch(`https://ironbeer-api.herokuapp.com/beers/random`)
          .then(res => res.json())
          .then(
            (data) => {
                console.log(data)
              this.setState({
                isLoaded: true,
                beer: data[0]
              });
            
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error: error
              });
            }
        )
    } 
    render () {
        const {error, isLoaded, beer  } = this.state
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            return(
                <div>
                    <DetailedBeer {...beer}/>
                </div>
            )
        } 
    }

}