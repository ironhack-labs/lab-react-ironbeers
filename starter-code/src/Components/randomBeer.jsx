import React, { Component } from 'react';


class Random extends Component {

    render() {
        const { beer } = this.props
        console.log(beer)
        return (
            <div>

                {beer &&
                    <div className="card">
                        <img src={beer.image_url} alt="beer image" style={{
                            height: "180px",
                            width: "80px"
                        }} />
                        <div className="card-body" >
                            <h5 className="card-title" >
                                {beer.name}
                            </h5>
                            <p className="card-text">
                                {beer.description}
                            </p>
                        </div>
                    </div>
                }

            </div>
        );
    }
}

export default Random;