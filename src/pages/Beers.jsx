import React, {Component} from 'react';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Beer from '../components/Beer';

import beerAPI from '../api/beerApi';

class Beers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beers: [],
            isLoading: true
        };

    }


    async componentDidMount() {
        try {
            const allBeers = await beerAPI.getBeers();
            this.setState({isLoading: false});
            console.log(allBeers.data);

            this.setState({
                beers:allBeers.data
            });
        } catch (apiError) {
            console.log(apiError);
        }
    }

    render() {
        return (
            <div className="container">
                {this.state.isLoading && (
                    <Loader/>
                )}

                <Header/>

                {this.state.beers.map((beer, index) => (
                    <Beer key={index}  {...beer} />
                ))}
          
            </div>
        )
    }
}

export default Beers
