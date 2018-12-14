import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {

        return (
            <div className="d-flex align-items-center flex-column">
                <Link style={{width:"50%"}} to="/beers">
                    <div className="card" style={{width: "100%", margin: "auto"}}>
                        <img className="card-img-top" src="https://i.ytimg.com/vi/mFTF_MfQKCg/maxresdefault.jpg" alt="Card cap"/>
                        <div className="card-body">
                            <h5 className="card-title">All beers</h5>
                        </div>
                    </div>
                </Link>
                <br/>
                <Link style={{width:"50%"}} to="/random-beer">
                    <div className="card" style={{width: "100%", margin: "auto"}}>
                        <img className="card-img-top" src="https://media.gannett-cdn.com/wiscrapid/41823025001/201604/1144/41823025001_4851302083001_4851122808001-vs.jpg" alt="Card cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Random beer</h5>
                        </div>
                    </div>
                </Link>
                <br/>
                <Link style={{width:"50%"}} to="/new-beer">
                    <div className="card" style={{width: "100%", margin: "auto"}}>
                        <img className="card-img-top" src="https://www.ethozgroup.com/wp-content/uploads/2017/10/1.jpg" alt="Card cap"/>
                        <div className="card-body">
                            <h5 className="card-title">New beer</h5>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
export default Home