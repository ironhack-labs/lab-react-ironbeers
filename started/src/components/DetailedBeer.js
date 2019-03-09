import React, {Component} from 'react';
import Header from '../components/misc/Header';
// import { Link } from 'react-router-dom';

export default class DetailedBeer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          beer: {
            image_url:'',
            name:'',
            tagline:'',
            first_brewed:'',
            attenuation_level:'',
            description:'',
            contributed_by:''
          }
        };
    }

    componentDidMount() {
        const {params} = this.props.match;
        // console.log(this.props.match)
        fetch(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`)
          .then(res => res.json())
          .then(
            (data) => {
                // console.log(data)
              this.setState({
                isLoaded: true,
                beer: data
              });
            
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error: error
              });
            }
        )
    }

    render () {
        const {error, isLoaded, beer  } = this.state
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
                return (
                    <div className="container">
                        <Header/>
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={beer.image_url} alt="Beer" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">{beer.name}</p>
                                        <p className="subtitle is-6">{beer.tagline}</p>
                                    </div>
                                    <div className="media-right">
                                        <strong><h2 className="is-6 margin-0" >{beer.attenuation_level}</h2></strong>
                                        <small>{beer.first_brewed}</small>
                                    </div>
                                </div>

                                <div className="content">
                                    <p>{beer.description}</p>

                                    <small>{beer.contributed_by}</small>

                                </div>
                            </div>
                        </div>
                    </div>

                )
             }        
    }    
}
