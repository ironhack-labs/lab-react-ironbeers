import React from 'react';
import PageHeader from '../pageHeader/PageHeader';
import beersImage from '../../assets/beers.png';
import { Link } from 'react-router-dom';

class Beers extends React.Component {
    state =  {
        listBeers: [],
        isLoaded: false
    }

    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
        .then((res) => res.json())
        .then(
        (result) => {
            this.setState({
                listBeers: result,
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
        return (
            <div>
                <PageHeader image={beersImage} title="Beers" description="Lorem ipsum" />
                <ul>
                    {this.state.listBeers.map((item) => 
                        <li key={item._id}> 
                            <img className="image" style={{maxHeight:"200px"}} src={item.image_url} alt="beer"></img>
                            {item.name}
                            {item.tagline}
                            {item.contributed_by} 
                            <Link to={`/beers/${item._id}`} >Details</Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Beers;
