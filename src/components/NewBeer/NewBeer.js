import axios from 'axios'
import React,{Component} from 'react'
import Header from '../Header/Header'
import '../NewBeer/NewBeer.css'


class NewBeer extends Component{
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
    }

    onChange =(e)=>{
        const{name,value} = e.target

        this.setState({
            [name]:value
        })
    }

    onSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {...this.state})
        .then(response => {
            console.log('muy bien chaval')
          })
          .catch((e) => console.log(e))

      
    }


    render(){
        const {name,tagline,description,first_brewed,brewers_tips,attenuation_level,contributed_by}= this.state
        return(
           
            <div className='newBeer'>
             <Header />
                <form  className='d-flex flex-column my-2 align-items-center mx-2 ' onSubmit={this.onSubmit}>
                <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input 
                        type="text" className="form-control" id="name" autoComplete='off'
                        name="name"  value={name} onChange={this.onChange}
                        />
                         
                      
                </div>
                <div className="mb-3">
                        <label htmlFor="tagline" className="form-label">Tagline</label>
                        <input 
                        type="text" className="form-control" id="tagline" autoComplete='off'
                        name="tagline"  value={tagline} onChange={this.onChange}
                        />
                         
                      
                </div>
                <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input 
                        type="text" className="form-control" id="description" autoComplete='off'
                        name="description"  value={description} onChange={this.onChange}
                        />
                         
                      
                </div>
                <div className="mb-3">
                        <label htmlFor="first_brewed" className="form-label">First_brewed</label>
                        <input 
                        type="text" className="form-control" id="first_brewed" autoComplete='off'
                        name="first_brewed"  value={first_brewed} onChange={this.onChange}
                        />
                         
                      
                </div>
                <div className="mb-3">
                        <label htmlFor="brewers_tips" className="form-label">Brewers_tips</label>
                        <input 
                        type="text" className="form-control" id="brewers_tips" autoComplete='off'
                        name="brewers_tips"  value={brewers_tips} onChange={this.onChange}
                        />
                         
                      
                </div>
                <div className="mb-3">
                        <label htmlFor="attenuation_level" className="form-label">Attenuation_level</label>
                        <input 
                        type='number' className="form-control" id="attenuation_level" autoComplete='off'
                        name="attenuation_level"  value={attenuation_level} onChange={this.onChange}
                        />
                         
                      
                </div>
                <div className="mb-3">
                        <label htmlFor="contributed_by" className="form-label">Contributed_by</label>
                        <input 
                        type="text" className="form-control" id="contributed_by" autoComplete='off'
                        name="contributed_by"  value={contributed_by} onChange={this.onChange}
                        />
                         
                      
                </div>
                <button className="btn btn-outline-primary" type="Submit">Create new beer</button>
                </form>
            </div>
        )
    }
}


export default NewBeer