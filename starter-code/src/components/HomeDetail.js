import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeDetail.css';

class HomeDetail extends Component {
    render() {
        const { img, alt, title, linkTo } = this.props;

        return (
            <div>
                <Link className='HomeDetail-Link' to={linkTo}>
                    <div>
                        <img className='HomeDetail-img' src={img} alt={alt} />
                        <div className='HomeDetail-text-container'>
                            <h1 className='HomeDetail-h1'>{title}</h1>
                            <p className='HomeDetail-p'>Pariatur incididunt laboris laborum ea labore fugiat laboris esse magna eiusmod.</p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default HomeDetail;