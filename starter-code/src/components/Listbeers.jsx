import React, { Component } from 'react'
import axios from 'axios'
import Navmain from './Navmain';
import {Link} from "react-router-dom";

export default class Listbeers extends Component {
        state = {
            beers : [],
        };

    componentDidMount() {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then(apiRes => this.setState({beers : apiRes.data}))
        .catch(apiErr => console.log(apiErr));
    }

    render() {
        return this.state.beers ? (
            <div>
            <Navmain />
             {
                    this.state.beers.map((t,i) => (
                        <Link className="linksinglebeer" to= {`/beer/${t._id}`}>
                        <div className="displaybeers" key={i}>
                            <div className="imagebeer">
                              <img src={t.image_url} alt="beerpic" />
                             
                            </div>
                        <div className="nametagcontributed">
                        <p className="name">{t.name}</p> 
                        <p className="tag">{t.tagline}</p> 
                        <p className="contributed">Created by : {t.contributed_by}</p>
                        </div>
                        
                        </div>
                        </Link>
                    ))
             }
             </div>
            ) : (
                <p>no beers</p>
            );

}}