import React from 'react';
import { NavLink } from 'react-router-dom';
import FormField from './services/FormField';

const Home = ({ toggleHome }, props) => (

    
    <div>
        <NavLink to="/beers" className="button btn is-info is-outlined" onClick={toggleHome}>
            <span className="icon is-large">
            <i className="fas fa-beer"></i>
            </span>
            <span>Beers</span>
        </NavLink>
        <NavLink to="/random-beers/:name" className="button btn is-info is-outlined" onClick={toggleHome}>
            <span className="icon is-large">
            <i className="fas fa-random"></i>
            </span>
            <span>Random Beers</span>
        </NavLink>
        <NavLink to="/new-beers" className="button btn is-info is-outlined" onClick={toggleHome}>
            <span className="icon is-large">
            <i className="fas fa-plus-circle"></i>
            </span>
            <span>Add Beers</span>
        </NavLink>
        <div className="search-box">
            <FormField name="search"  icon="fas fa-search" 
            value={props.search} 
            onChange={(e) => props.onSearch(e.target.value)}
            />
        </div>
        
    </div>
)

export default Home;