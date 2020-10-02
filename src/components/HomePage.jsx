import React from 'react';
import SectionCard from './SectionCard';
import '../stylesheets/HomePage.css'

const HomePage =  props => {
    return (
        <main className="HomePage">
            <SectionCard title="All Beers" link="/list" image="images/pub1.jpeg"/>
            <SectionCard title="Random Beer" link="/random" image="images/pub2.jpeg"/>
            <SectionCard title="New Beer" link="/new" image="images/pub3.jpeg"/>
        </main>
    )
};

export default HomePage;