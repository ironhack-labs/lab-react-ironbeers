import React,{ Component } from 'react'
import { Link } from 'react-router-dom'


class Home extends Component {
    constructor() {
        super()
        this.state = { }
    }
    


    render() {
 
        return (
            <div className="contaier-flex">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="Card">
                            <img src="https://cdn.pixabay.com/photo/2016/11/29/12/54/bar-1869656_1280.jpg" className="card-img-top" alt="Bar" />
                            <div className="card-body">
                                <Link to="/beers"> <h5 className="card-title">All beers</h5></Link>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie nunc lectus, in congue arcu fermentum tincidunt. Pellentesque pellentesque rhoncus condimentum. Donec metus urna, gravida nec nisi id, porta semper ex.</p>
                            </div>
                        </div>
                        <div className="Card">
                            <img src="https://cdn.pixabay.com/photo/2015/09/02/13/26/glasses-919071_1280.jpg" className="card-img-top" alt="Beers" />
                            <div className="card-body">
                                <Link to="/random-beer"> <h5 className="card-title">Random beer</h5> </Link>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie nunc lectus, in congue arcu fermentum tincidunt. Pellentesque pellentesque rhoncus condimentum. Donec metus urna, gravida nec nisi id, porta semper ex.</p>
                            </div>
                        </div>
                        <div className="Card">
                            <img src="https://cdn.pixabay.com/photo/2015/09/24/20/36/beer-barrel-956322_1280.jpg" className="card-img-top" alt="Barrel beer" />
                            <div className="card-body">
                                <Link to="/new-beer"> <h5 className="card-title">New beer</h5> </Link>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie nunc lectus, in congue arcu fermentum tincidunt. Pellentesque pellentesque rhoncus condimentum. Donec metus urna, gravida nec nisi id, porta semper ex.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    }
export default Home