import React from 'react';
import "./styles.css";
import Header from '../Header';
import axios from "axios";

const url = 'https://ih-beers-api2.herokuapp.com/beers';
const STATUS = {
    error: "Error de carga con la API",
    inProgres: './images/load.gif'
}

class Beer extends React.Component {

    constructor() {
        super();
        this.state = {
            inProges: true,
            error: false,
        }
    }

    componentDidMount = () => {
        let urlAll = url + '/' + this.props.match.params.id;
        console.log(urlAll);
        this.setState({inProges: true})
        axios
            .get(urlAll)
            .then((response)=> {
                this.setState({
                    beer: response.data,
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

    createBeerView = (beer) => {
        const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = beer;
        return ( 
            <div className="boxBeer"> 
                <div className="imgbeer"> <img className="imgBeer" src={image_url} alt={name}/> </div>
                <div class="boxNameAtten line">
                    <div className="namebeer"> {name} </div> 
                    <div className="attenuation_level"> {attenuation_level} </div>
                </div>
                <div className="line">
                    <div className="tagline c-lgrey"> {tagline} </div>
                    <div className="first_brewed"> {first_brewed} </div>
                </div>
               
                <div className="description"> {description} </div>
                <div className="contributed_by c-lgrey"> {contributed_by} </div>
               
            </div>
        )
    }
    
    render(){
        const { inProges, error, beer } = this.state;
        console.log(beer)
        return (
            <div>
                <Header />
                {error && <div> {STATUS.error} </div>}
                {!error && inProges && <div> <img className="gif" src={STATUS.inProgres} /> </div>}
                {!error && !inProges && this.createBeerView(beer)}
            </div>
        )
    }
}

export default Beer;