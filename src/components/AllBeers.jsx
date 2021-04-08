import React ,{ Component } from 'react';
import Header from './Header';
import {getBeers} from '../services/BaseSevices';
import SyncLoader from 'react-spinners/SyncLoader';
import Beer from './Beer';



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
 

        return (

            <div className="AllBeers">
                <Header />
                
                {beers.map ((beer) => {
                    return (

                    
                        <div className="Beer" key={beer._id}> 
                            <Beer {...beer} />
                  
                        </div>
                    )
                })}

            </div>

        )

    }
}

export default AllBeers;