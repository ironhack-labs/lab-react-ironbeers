import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class BeerCard extends Component{
    state = {
        beer: this.props.detail[0],
        idx: this.props.id
    }

    handleChange = (idx) => {
        this.setState({beer: this.props.detail[idx]})
    }

    render() {

    
        
    return (
            <Fragment key={this.state.idx}>
                {/* // <Link to="/beer-detail/:idx" className="btn btn-primary" key={props.key} onClick= {() => this.handleChange(idx)}><img src={props.detail.image_url} alt="" height="100px"/> */}
                <Link  to={`/beer-detail/${this.state.idx}`} alt="" height="100px" onClick= {() => this.handleChange(this.state.idx)} ><img src={this.props.detail.image_url} alt="" height="100px"/>
                <h4>{this.props.detail.name}</h4>
                <p>{this.props.detail.tagline}</p>
                <p>{this.props.detail.contributed_by}</p>
                </Link>
            </Fragment>
    )
    }
}

export default BeerCard;