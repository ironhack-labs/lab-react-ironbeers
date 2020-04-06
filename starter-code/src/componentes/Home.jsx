import React from 'react'
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div>
            <div className="d-flex flex-nowrap align-content-center justify-content-center flex-column ">
                <Link to="/beers">
                    <div className="d-flex flex-nowrap flex-column">
                        <img className="mb-2 img-fluid" style={{ width: '100%' }} src='/images/beers.png' alt="allbeers"></img>
                        <p className="h2 pl-3 text- float-left ">All beers</p>
                        <p className="text-secondary   text-justify text-left px-3">Lorem ipsum adipiscing elit. Praesent ornare a purus id auctor. Aliquam ornare ipsum augue, vitae sagittis quam pellentesque ac. Aliquam erat volutpat. Sed ut magna quis mi tempus convallis. Vestibulum ut gravida purus. Sed sit amet semper mauris.</p>
                    </div>
                </Link>


                <Link to="/random-beer">
                    <div className="d-flex flex-nowrap flex-column">

                        <img className="mb-2 img-fluid" style={{ width: '100%' }} src='/images/random-beer.png' alt="allbeers"></img>
                        <p className="h2 pl-3 float-left ">Random Beers</p>
                        <p className="text-secondary  text-justify text-left px-3">Lorem ipsum adipiscing elit. Praesent ornare a purus id auctor. Aliquam ornare ipsum augue, vitae sagittis quam pellentesque ac. Aliquam erat volutpat. Sed ut magna quis mi tempus convallis. Vestibulum ut gravida purus. Sed sit amet semper mauris.</p>
                    </div>
                </Link>


                <Link to="/new-beer">
                    <div className="d-flex flex-nowrap flex-column">
                        <img className="mb-2 img-fluid" style={{ width: '100%' }} src='/images/new-beer.png' alt="allbeers"></img>
                        <p className="h2 pl-3 float-left ">New Beer</p>
                        <p className="text-secondary text-justify text-left px-3">Lorem ipsum adipiscing elit. Praesent ornare a purus id auctor. Aliquam ornare ipsum augue, vitae sagittis quam pellentesque ac. Aliquam erat volutpat. Sed ut magna quis mi tempus convallis. Vestibulum ut gravida purus. Sed sit amet semper mauris.</p>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Home
