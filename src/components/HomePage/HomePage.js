import React,{ Component} from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'


class HomePage extends Component{
    render(){
        return(
            <div className='container'>
                <div className='all-beers mt-5'>
                    <img src='./img/beers.png' alt='beers' />
                    <h2 className='text-left'>
                    <Link className="badge badge-light ml-3" to="/beers">
                    All beers
                    </Link>
                    </h2>
                    <div className='home-text text-left mb-5 mx2'>
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
                <div className='random-beer'>
                    <img src='./img/random-beer.png' alt='beers' />
                    <h2 className='text-left'>
                    <Link className="badge badge-light ml-3" to="/random-beer">
                    Random Beer
                    </Link>
                    </h2>
                    <div className='home-text text-left mb-5 mx2'>
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
                <div className='new-beer'>
                    <img src='./img/new-beer.png' alt='beers' />
                    <h2 className='text-left'>
                    <Link className="badge badge-light ml-3" to="/new-beer">
                    NewBeer
                    </Link>
                    </h2>
                    <div className='home-text text-left mb-5 mx2'>
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
        )

        
    }

}

export default HomePage