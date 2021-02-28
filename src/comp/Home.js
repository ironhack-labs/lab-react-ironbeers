import React from 'react'
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="all-beers col-sm-4">
                        <Link className="link" to='/beers'>
                            <img src="./beers.png" alt='all-beers' />
                            <h3>All Beers</h3>
                        </Link>

                        <div className="home-text text-left mb-5 mx-2">
                            <p >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
                            pretium nisi, a sagittis nulla. Integer varius elit eget viverra
                            condimentum. Nam nunc eros, tincidunt ut venenatis non, imperdiet
                            vitae dolor. Cras semper, sapien ut bibendum suscipit, dolor ipsum
                            tincidunt nulla, vel hendrerit eros ante et massa. Aliquam
                            molestie non arcu et placerat. Aliquam erat volutpat. Quisque id
                            turpis non ipsum cursus laoreet. Fusce blandit faucibus consequat.
                            Donec sed mollis ligula. Donec hendrerit fermentum tellus vel
                            placerat.
                            </p>
                        </div>
                    </div>

                    <div className='random-beer col-sm-4'>
                        <Link className="link" to='random-beer'>
                            <img src="./random-beer.png" alt='random-beer' />
                            <h3>Random beer</h3>
                        </Link>
                        <div className="home-text text-left mb-5 mx-2">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
                            pretium nisi, a sagittis nulla. Integer varius elit eget viverra
                            condimentum. Nam nunc eros, tincidunt ut venenatis non, imperdiet
                            vitae dolor. Cras semper, sapien ut bibendum suscipit, dolor ipsum
                            tincidunt nulla, vel hendrerit eros ante et massa. Aliquam
                            molestie non arcu et placerat. Aliquam erat volutpat. Quisque id
                            turpis non ipsum cursus laoreet. Fusce blandit faucibus consequat.
                            Donec sed mollis ligula. Donec hendrerit fermentum tellus vel
                            placerat.
                            </p>
                        </div>
                    </div>

                    <div className='new-beer col-sm-4'>
                        <Link className="link" to='new-beer'>
                            <img src="./new-beer.png" alt='new-beer' />
                            <h3>New beer</h3>
                        </Link> 
                        <div className="home-text text-left mb-5 mx-2">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
                            pretium nisi, a sagittis nulla. Integer varius elit eget viverra
                            condimentum. Nam nunc eros, tincidunt ut venenatis non, imperdiet
                            vitae dolor. Cras semper, sapien ut bibendum suscipit, dolor ipsum
                            tincidunt nulla, vel hendrerit eros ante et massa. Aliquam
                            molestie non arcu et placerat. Aliquam erat volutpat. Quisque id
                            turpis non ipsum cursus laoreet. Fusce blandit faucibus consequat.
                            Donec sed mollis ligula. Donec hendrerit fermentum tellus vel
                            placerat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
