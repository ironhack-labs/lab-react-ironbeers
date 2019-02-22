import React, { Component } from 'react';
import HomeCard from './../Components/HomeCard.js';

const Home = () => {
        return (
            <div>
                <HomeCard image_url='https://images.pexels.com/photos/63633/bar-local-cong-ireland-63633.jpeg?cs=srgb&dl=alcoholic-beverages-bar-beer-63633.jpg&fm=jpg' title='All Beers' link='/allbeers' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
                <HomeCard image_url='https://upload.wikimedia.org/wikipedia/commons/4/45/Beer_taps.jpg' title='Random Beer' link='/randombeer' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
                <HomeCard image_url='https://thumbor.thedailymeal.com/RQZO9FJDv735FvjcOmd3p5PPFCU=/840x565/https://www.thedailymeal.com/sites/default/files/2018/02/13/iStock-854848732_0_0.jpg' title='New Beer' link='/newbeer' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
            </div>
        );
}

export default Home;
