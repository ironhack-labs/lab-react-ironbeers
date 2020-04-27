import React from 'react';
import "./styles.css";
import Header from '../Header';
import Beer from '../Beer';
import axios from "axios";

// variables
const url = 'https://ih-beers-api2.herokuapp.com/beers';
const STATUS = {
    error: "Error de carga con la API",
    inProgres: './images/load.gif'
}

class ListAll extends React.Component {

    constructor() {
        super();
        this.state = {
            inProges: true,
            error: false,
        }
    }

    state = {
        list: []
    }

    componentDidMount = () => {
        this.setState({inProges: true})
        axios
            .get(url)
            .then((response)=> {
                this.setState({
                    list: response.data,
                    inProges: false
                })
            })
            .catch(()=> {
                this.setState({error: true})
            })
            return null;
    }

    state = {
        inProges: false,
        error: false,
    }

    render(){
        const { inProges, error, list } = this.state;
        console.log(list)
        return (
            <div>   
                <Header />
                {error && <div> {STATUS.error} </div>}
                {!error && inProges && <div> <img className="gif" src={STATUS.inProgres} /> </div>}
                {!error && !inProges && 
                    list.map((beer, index) => {
                       return <Beer key={index} beer={beer} />
                    })
                }
            </div>
        )
    }
}

export default ListAll;
