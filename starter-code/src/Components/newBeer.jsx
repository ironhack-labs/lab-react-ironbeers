import React, { Component } from 'react';

class NewBeer extends Component {


    render() {
        return (
            <div className="container">
                <form onSubmit={(e) => this.props.onCreateNewBeer(e)}>

                    <div className="form-group">
                        <label for="beer name">Enter Beer Name</label>
                        <input onChange={e => this.props.onHandleNewBeer(e)} className="form-control" type="text" name="name" value={this.props.name} />
                    </div>
                    <div className="form-group">
                        <label for="tagline">Enter Beer Tagline</label>
                        <input onChange={e => this.props.onHandleNewBeer(e)} className="form-control" type="text " name="tagline" value={this.props.tagline} />
                    </div>
                    <div className="form-group">
                        <label for="description">Enter Beer Description</label>
                        <input onChange={e => this.props.onHandleNewBeer(e)} className="form-control" type="text " name="description" value={this.props.description} />
                    </div>
                    <div className="form-group">
                        <label for="firstBrewed">When was it first brewed? </label>
                        <input onChange={e => this.props.onHandleNewBeer(e)} className="form-control" type="text " name="firstBrewed" value={this.props.firstBrewed} />
                    </div>

                    <div className="form-group">
                        <label for="tips">Brewer Tips </label>
                        <input onChange={e => this.props.onHandleNewBeer(e)} className="form-control" type="text " name="tips" value={this.props.tips} />
                    </div>
                    <div className="form-group">
                        <label for="attenuation">Attenuation </label>
                        <input onChange={e => this.props.onHandleNewBeer(e)} className="form-control" type="number " name="attenuation" value={this.props.attenuation} />
                    </div>
                    <div className="form-group">
                        <label for="contributor">Any Contributors? </label>
                        <input onChange={e => this.props.onHandleNewBeer(e)} className="form-control" type="text " name="contributor" value={this.props.contributor} />
                    </div>
                    <button className="btn btn-primary" >Submit</button>

                </form>
            </div >
        );
    }
}

export default NewBeer;