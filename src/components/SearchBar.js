import React, { Component } from "react";

class SearchBar extends Component {
    render() {
        const { handleChange } = this.props;

        return (
            <div className="uk-margin">
                <div className="uk-margin">
                    <form className="uk-search uk-width-1-2 uk-search-default">
                        <span className="uk-form-icon uk-search-icon-flip" uk-icon="icon: search"></span>
                        <input className="uk-search-input" type="search" placeholder="Search..." onChange={handleChange} />
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar;