import React, { Component } from 'react';
import Axios from 'axios'
import { Redirect } from 'react-router-dom';

class NewBeer extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            tagline:'',
            description:'',
            first_brewed:'',
            brewer_tips:'',
            attenuation_level:0,
            contributed_by:'',
            redirect:false
        };
    }

    submitHandler=(e)=> {
        e.preventDefault();
        const {name,tagline,description,first_brewed,brewer_tips,attenuation_level,contributed_by} = this.state;
        Axios.post('https://ih-beers-api2.herokuapp.com/beers/new',{name,tagline,description,first_brewed,brewer_tips,attenuation_level,contributed_by})
            .then(response => { 
                console.log(response)
                this.setState({
                    redirect:true
                })
                // this.setState({
                //     name:'',
                //     tagline:'',
                //     description:'',
                //     first_brewed:'',
                //     brewer_tips:'',
                //     attenuation_level:0,
                //     contributed_by:''
                // })
            })

    }

    inputHandler=(e) => {
        let {name,value} = e.target;
        console.log(name,value);
        this.setState({
            [name]:value
        })

    }

    render() {
        if(this.state.redirect) {
            return <Redirect to='/'/>
        }
        return (
            <form onSubmit={this.submitHandler} className='ml-5 mr-5'>
                <div className='form-group'>
                    <label >name</label>
                    <input type="text" name='name' className='form-control rounded-pill' value={this.state.name} onChange={(e)=>this.inputHandler(e)} />
                </div>
                <div className='form-group'>
                    <label >Tagline</label>
                    <input type="text" name='tagline' className='form-control rounded-pill' value={this.state.tagline} onChange={(e)=>this.inputHandler(e)} />
                </div>
                <div className='form-group'>
                    <label >Description</label>
                    <textarea type="text" name='description' className='form-control rounded-lg' value={this.state.description} onChange={(e)=>this.inputHandler(e)} />
                </div>
                <div className='form-group'>
                    <label >First Brewed</label>
                    <input type="text" name='first_brewed' className='form-control rounded-pill' value={this.state.first_brewed} onChange={(e)=>this.inputHandler(e)} />
                </div>
                <div className='form-group'>
                    <label >Brewer tips</label>
                    <input type="text" name='brewer_tips' className='form-control rounded-pill' value={this.state.brewer_tips} onChange={(e)=>this.inputHandler(e)} />
                </div>
                <div className='form-group'>
                    <label >Attenuation Level</label>
                    <input type="number" name='attenuation_level' className='form-control rounded-pill' value={this.state.attenuation_level} onChange={(e)=>this.inputHandler(e)} />
                </div>
                <div className='form-group'>
                    <label >Contributed By</label>
                    <input type="text" name='contributed_by' className='form-control rounded-pill' value={this.state.contributed_by} onChange={(e)=>this.inputHandler(e)} />
                </div>
                <input type="submit" className='btn btn-primary' value="Add new"/>

            </form>
        );
    }
}

export default NewBeer;