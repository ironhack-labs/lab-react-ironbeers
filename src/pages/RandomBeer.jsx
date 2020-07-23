import React from 'react';
import DisplayOneBeer from '../components/DisplayOneBeer';
import apiHandler from "../api/apiHandler";

class RandomBeer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomBeer: null,
        };
    }

    componentDidMount() {
        apiHandler
            .getRandomBeer()
            .then((res) => {
                this.setState({ randomBeer: res.data });
                console.log(res)
            })
            .catch((error) => console.log(error));
    }

    render() {
        if (this.state.randomBeer === null) return <div>Loading...</div>;

        return (<div>
            <DisplayOneBeer beer ={this.state.randomBeer}/>
        </div>
        );
    }
}

export default RandomBeer
