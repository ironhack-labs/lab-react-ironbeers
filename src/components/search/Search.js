import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchBeers: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired

    };
    onChange = (e) => {

        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    searchSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter something', 'danger');
        } else {
            this.props.searchBeers(this.state.text);
            this.setState({ text: '' });
        }


    }
    render() {
        return (
            <Fragment>
                <form onSubmit={this.searchSubmit}>
                    <div className="form-group">
                        <input className='form-control' type="text" name='text' placeholder='Search Beers...' onChange={this.onChange} />

                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className='btn btn-success form-control' />
                    </div>
                </form>

            </Fragment>
        )
    }
}
