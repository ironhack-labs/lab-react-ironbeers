import React from 'react';
import Header from "../header/Header";
import service from "../../services/beer-services"
import Beer from "../beer/Beer"

class BeerList extends React.Component {

    state = {
        beers: []
    }

    componentDidMount() {
        service.list().then(beers => this.setState({ beers })).catch(error => console.error(error))        
    }


    render() {        

        const { beers } = this.state;

        return (
            <div>
                <Header />
                {
                    beers.map((beer, i) => {
                        return <Beer beer={beer} key={i} />
                    })
                }
            </div>
        )
    }
}

export default BeerList