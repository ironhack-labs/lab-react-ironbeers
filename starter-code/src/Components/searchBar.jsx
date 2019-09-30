import React, { Component } from 'react';

class SearchBar extends Component {
    state = {}
    render() {
        return (
            <div class="input-group input-group-sm mb-3 container">
                <input
                    type="text" class="form-control"
                    placeholder="Searching"
                    value={this.props.query}
                    onChange={(e) => this.props.onQuery(e.currentTarget.value)}
                />
            </div>
        );
    }
}

export default SearchBar;