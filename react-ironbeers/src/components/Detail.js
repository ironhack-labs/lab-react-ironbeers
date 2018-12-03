import React, {Component} from 'react';
import axios from 'axios';
import Header from "./Header";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state={
            beer:{}
        }
    }

    componentWillMount() {
        let beer = {};
        //let id = this.props.match.params;
        const route = this.props.match.params.id  ?  `single/${this.props.match.params.id}` : "random";
        axios.get(`https://ironbeer-api.herokuapp.com/beers/${route}`)
            .then(res=> {
                console.log(res);
                beer = this.props.match.params.id  ? res.data : res.data[0];
                this.setState({beer})
            })
            .catch(err => {
                console.log(err);
            })
    }


    render(){
        const {beer} =this.state;
        return(
            <div>
                <Header/>
                <div className="box columns" style={{marginTop:50}}>
                    <figure className="is-left column">
                        <img src={beer.image_url} alt={beer.name}/>
                    </figure>
                    <div className="column">
                        <h1 className="is-size-1">{beer.name}</h1>
                        <h3> {beer.tagline}</h3>
                        <span>{beer.first_brewed}</span> <br/>
                        <strong>{beer.attenuation_level}</strong>
                        <p>{beer.description}</p>
                        <strong>{beer.contributed_by}</strong>
                    </div>
                </div>

            </div>

        )
    }

}

export default Detail;