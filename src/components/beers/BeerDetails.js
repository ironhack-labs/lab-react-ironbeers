import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Header from '../header/Header';

export class BeerDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {

        };
    }
    componentDidMount() {
        this.getOneBeer();
    }

    getOneBeer = () => {
        const { params } = this.props.match;

        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${params.beersID}`)
            .then(responseFromApi => {
                const theBeer = responseFromApi.data;
                this.setState(theBeer);
            })
            .catch(err => console.log(err));

    }




    render() {
        return (
            <Fragment>
                <Header />
                <div className='container pt-5'>
                    <div className='card d-flex justify-content-center align-items-center my-5 py-5  text-center'>

                        <img className='order-1 w-25 mw-100 mb-4' src={this.state.image_url} alt={this.state.name} />
                        <div className="d-flex flex-column flex-nowrap order-2">
                            <h3 className=' border-bottom w-75 mx-auto pb-2 '>{this.state.name}</h3>
                            <h4 className="text-muted">{this.state.tagline}</h4>
                            <p>First Brewed: {this.state.first_brewed}</p>
                            <p>Attenuation Level: {this.state.attenuation_level}</p>
                            <p className='px-4 text-justify'>{this.state.description}</p>
                            <p>Created by: {this.state.contributed_by}</p>
                        </div>


                    </div>

                </div>
            </Fragment>
        )
    }
}

export default BeerDetails;
