import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                beers: [],
        }
    }

    /*
    async componentDidMount(){
       try {
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
        
        this.setState({
            beers: response.data,
        } )

        } catch(error){
        console.log(error);
        }
    }
    */


   componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            console.log(response.data);
            this.setState({
                beers: response.data
            })
        })
        .catch(err => {
            console.log(err);
        })
}    


    render(){
        
        return(
            <div className="HomeWrapper">
                    <ul>
                    
                    <li><Link to={{
                pathname:'/beers',
                state: {
                    beers: this.state.beers
                }
            }}>All Beers</Link>
                    </li>
                    <li>
                    <Link to={{
                pathname:'/random-beer',
                state: {
                    beers: this.state.beers
                }
            }}>Radnom Beer</Link>
                    </li>
                    <li>
                    <Link to="/new-beer">Add a New Beer</Link>
                    </li>
                    </ul>
            </div>
        )
    }

}

export default Home;