import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1>HOME</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></img>
                            <div className="card-body">
                                <h3>All Beers</h3>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                <a href="/beers"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> </a>                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                            <img className="card-img-top" width="100%" height="225" src="https://images.unsplash.com/photo-1584225064536-d0fbc0a10f18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" ></img>
                            <div className="card-body">
                                <h3>Random Beer</h3>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                <a href="/random-beer"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> </a>                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://images.unsplash.com/photo-1511963118349-e2b22c0efcfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" ></img>
                                <div className="card-body">
                                <h3>Create a beer</h3>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                   <a href="/new-beer"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> </a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default Home
