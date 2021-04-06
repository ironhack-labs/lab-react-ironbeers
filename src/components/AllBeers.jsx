import React ,{ Component } from 'react';
import Header from './Header';
import {getBeers} from '../services/BaseSevices';
import SyncLoader from 'react-spinners/SyncLoader';



class AllBeers extends Component {

    state = {
        beers : [],
        loading: true
    }

    componentDidMount() {
        getBeers()
        .then(beers => this.setState({beers , loading: false}))


    }

    render() {
        const { beers ,loading} = this.state;
        console.log (beers)

        return (
            <div className="AllBeers">
                <Header />
                {beers.map ((beer) => {
                    return (
                        <div className="Beer" key={beer._id}> 
                        <img src={beer.image_url} alt=""/>
                        <h2>{beer.name}</h2>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                        </div>
                    )
                })}

            </div>

        )

    }
}

export default AllBeers;