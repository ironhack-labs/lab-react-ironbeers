import React, { Component } from 'react';
import { HomeItem } from './HomeItem';
import { Link } from 'react-router-dom';

const Home = () => {

    let content= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error rerum quasi quos numquam sed sapiente culpa"

    return (
        <div>
            <Link to='/beers'><HomeItem title={"All Beers"} content={content} url={"/beers"}/></Link>
            <Link to='/random-beer'><HomeItem title={"Random Beer"} content={content} /></Link>
            <Link to='/new-beer'><HomeItem title={"New Beer"} content={content} /></Link>
        </div>
    )
}

export default Home;