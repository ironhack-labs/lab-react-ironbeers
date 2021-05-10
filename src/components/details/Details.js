import React from 'react';
import PageHeader from '../pageHeader/PageHeader';
import beersImage from '../../assets/random-beer.png';

class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedBeer: {},
            isLoaded: false,
        }
    }

    
    componentDidMount() {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`)
        .then((res) => res.json())
        .then(
        (result) => {
            console.log(result)
            this.setState({
                selectedBeer: result,
                isLoaded: true
            })
        },

        (error) => {
            this.setState({
            isLoaded: true,
            error,
            });
        }
        );
    }

    render() {
        return(
            <div>
                <PageHeader image={beersImage} title="Selected Beer" description="Lorem ipsum"/>
                <img style={{maxHeight:"200px"}} src={this.state.selectedBeer.image_url} alt={this.state.selectedBeer.name}></img>
                <h2>{this.state.selectedBeer.name}</h2>
                <p><b>Tagline:</b> {this.state.selectedBeer.tagline}<br />
                <b>First brewed on:</b> {this.state.selectedBeer.first_brewed}<br />
                <b>Attenuation level:</b> {this.state.selectedBeer.attenuation_level}<br />
                <b>Description:</b>{this.state.selectedBeer.description}<br />
                <b>Contributed by:</b>{this.state.selectedBeer.contributed_by}</p>
            </div>
        )
    }
}

export default Details;