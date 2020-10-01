import React from 'react'
import { Link } from 'react-router-dom'

// Bootstrap
import Col from 'react-bootstrap/Col'

export default ({ _id, image_url, name, tagline, contributed_by }) => {

    return (
        <Col sm={12} md={6}>
            <Link to='/' className='text-dark'>
                <div className="card mb-3" style={{maxWidth: '540px'}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={image_url} className="card-img" alt={name} style={{height: '100px', objectFit: 'contain'}} />
                        </div>
                        <div className=" col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{tagline}</p>
                                <p className="card-text"><small className="text-muted">{contributed_by}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </Col>
    )
}