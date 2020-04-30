import React, { Component } from 'react';
import LinkCard from '../LinkCard';

class Home extends Component {
    render() {
        return(
            <section>
                <LinkCard image="https://source.unsplash.com/08tX2fsuSLg/1600x900" title="All beers" label="See all" />
                <LinkCard image="https://source.unsplash.com/K8nr6rNDtUE/1600x900" title="Random beer" label="Get random" />
                <LinkCard image="https://source.unsplash.com/8T5UAV6KkZA/1600x900" title="Add a beer" label="Add one" />
            </section>
        )
    }
}

export default Home;