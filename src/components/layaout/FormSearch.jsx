import React from 'react';
import Input from './Input';
import FontAwesome from 'react-fontawesome';
import { searchBeers } from '../../services/api-client';
import { Link } from 'react-router-dom';

class FormSearch extends React.Component {
  state = {
    data: '',
    error: false,
    touch: false,
    beers: [],
    notFound: true,
  };

  handleChange = (event) => {
    const { value } = event.target;

    const isValid = (value) => value.length > 1;

    this.setState({
      data: value,
      error: !isValid,
    });
    searchBeers(value).then((response) => {
      this.setState({
        beers: response.data,
        notFound: response.data?.length === 0 && true,
      });
    });
  };

  render() {
    const { data, error, touch, beers, notFound } = this.state;
    return (
      <div>
        <form
          method="GET"
          action="/search"
          className="form-inline my-2 my-lg-0"
        >
          <div className="input-group mb-xs-3">
            <Input
              type="text"
              name="q"
              value={data}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={error}
              touch={touch}
              label={false}
              placeholder={'Search'}
              autoComplete={false}
            />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="submit">
                <FontAwesome name="search" />
              </button>
            </div>
          </div>
        </form>
        <div className="dropdown">
          <div
            className={`dropdown-menu dropdown-menu-right ${
              (data.length > 0 || beers.length > 0) && 'show'
            }`}
          >
            {notFound ? (
              <p className="text-center mb-0">Not found</p>
            ) : (
              beers?.map((beer) => (
                <Link
                  key={beer._id}
                  className="dropdown-item"
                  to={`/beers/${beer._id}`}
                >
                  {beer.name}
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FormSearch;
