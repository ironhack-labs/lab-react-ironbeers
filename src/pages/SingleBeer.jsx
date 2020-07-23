import React from 'react'
import Header from '../components/Header';
import DisplayOneBeer from '../components/DisplayOneBeer';
import apiHandler from "../api/apiHandler";

class SingleBeer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: null,
        };
    }

    componentDidMount() {
        console.log(this.props)
        const beerId = this.props.match.params.id;
        apiHandler
            .getOneBeer(beerId)
            .then((res) => {
                this.setState({ beer: res.data });
                console.log(res)
            })
            .catch((error) => console.log(error));
    }

    render() {
        if (this.state.beer === null) return <div>Loading...</div>;

        return (<div>
            <Header />
            <h1>Beer detail</h1>
            <DisplayOneBeer beer ={this.state.beer}/>
        </div>
        );
    }
}

export default SingleBeer
