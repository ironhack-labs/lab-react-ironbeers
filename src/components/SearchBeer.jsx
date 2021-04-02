import React from 'react';
import { searchBeer } from '../services/BaseService';

class SearchBeer extends React.Component {

    state = {
        search: ''
    }
    
    onSearch = (e) => {
        this.setState({ 
            search: e.target.value 
        });

        console.log('this.state.search', this.state.search)

        searchBeer(this.state.search)
            .then(foundBeers => this.setState({foundBeers}))
            .catch(err => console.log(err));
    };

    handleSearch = (e) => {
        this.props.searchBeer(this.state)
    }

    render(){
        return (
            <div className="SearchBeer">
                <form>
                    <div className="form-group">
                        <input
                            type="search" className="form-control mb-2" name="search__beer"
                            id="search__beer" placeholder="Search beer..." autoComplete="off"
                            onChange={(e) => this.handleSearch(e)} value={this.props.state.search}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBeer;