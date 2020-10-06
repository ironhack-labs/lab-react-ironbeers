import React from 'react'
import { Link } from 'react-router-dom'


class BeerCard extends React.Component {
    render() {
        return (
            <div className="col-md-4 col-xs-12">
                <Link to={`/beers/${this.props.beer._id}`}>
                    <div className="card" style={{ Width: '18rem' }}>
                        <img src={this.props.beer.image_url} className="card-img-top beer-img" alt={this.props.beer.name} />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.beer.name}</h5>
                            <p className="card-text">{this.props.beer.description}</p>
                            <Link to={`/beers/${this.props.beer._id}`} className="btn btn-primary btn-block">{this.props.beer.name}</Link>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default BeerCard
