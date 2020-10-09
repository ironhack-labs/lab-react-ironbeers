import React, {Component} from 'react';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Beer from '../components/Beer';

import beerAPI from '../api/beerApi';

import "../styles/Beers.css";

class Beers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beers: [],
            isLoading: true,
            query: '',
            searchBeers: [],
            isSearching: false
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

    handlerChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;

        this.setState({
           [name]:value,
           isSearching: true, 
        });

        beerAPI.search(value).then((resApi) => {
            console.log(resApi);

            this.setState({
                searchBeers: resApi.data,
            })
        })

    }

    render() {
        return (
            <div className="beers">
                <div className="container">
                    {this.state.isLoading && (
                        <Loader/>
                    )}

                    <Header/>
                    
                    <div className="container-serach">
                        <div class="field">   
                            <div className="control has-icons-right has-icons-right">
                                <input 
                                    className="input is-rounded "
                                    type="search"
                                    placeholder="Search..."
                                    name="query" value={this.state.query} onChange={(e) => this.handlerChange(e)} 
                                    />

                            </div>

                            
                                
                            
                        </div> 
                    </div>  

                    {this.state.query !== '' ? (
                        <>
                        {this.state.searchBeers.map((beer, index) => (
                            <Beer key={index}  {...beer} />
                        ))}
                        </>
                    ): (
                        <>
                        {this.state.beers.map((beer, index) => (
                            <Beer key={index}  {...beer} />
                        ))}
                        </>
                    )}
                    
            
                </div>
            </div>
        )
    }
}

export default Beers
