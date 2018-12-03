import React, {Component} from 'react';
import axios from 'axios';
import {Link} from  'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            beers:[]
        }
    }

    componentWillMount() {
        let beers = [];
        axios.get('https://ironbeer-api.herokuapp.com/beers/all')
            .then(res => {
                beers = res.data;
                this.setState({beers})
            })
            .catch(err => {
                console.log(err)
            })
    }


    render(){
        const {beers} = this.state;
        return(
            <div>
                <div className="section">
                    <Link to={{pathname: '/beers', state:{beers} }}>
                        <img src={require("../mnm-all-552510-unsplash.jpg")} alt="chelas"/>
                        <h2>All beers</h2>
                    </Link>
                </div>
                <div className="section " >
                    <Link to="/random-beer">
                        <img is-fullwidth src={require("../thomas-picauly-65648-unsplash.jpg")} alt="chelas"/>
                        <h2>Random beer</h2>
                    </Link>
                </div>
                <div className="section">
                    <Link to="/new-beer">
                        <img src={require("../stella-de-smit-516889-unsplash.jpg")} alt="chelas"/>
                        <h2>New beer</h2>
                    </Link>
                </div>
            </div>
        )
    }
};

export default Home;