
  
import React, {Component} from 'react';
import NavBar from './NavBar'


class AddBeer extends Component {
    state={
        
        name:'',
        tagline:'',
        description:'',
        first_brewed:'',
        brewers_tips:'',
        attenuation_level:'',
        contributed_by:''
    };

    handleFormSubmit = event => {
        event.preventDefault();
    
        
        const name = this.state.name;
        const tagline = this.state.tagline;
        const description = this.state.description;
        const first_brewed= this.state.first_brewed;
        const brewers_tips= this.state.brewers_tips;
        const attenuation_level = this.state.attenuation_level;
        const contributed_by = this.state.contributed_by;

        const data = {
            
            name:name,
            tagline:tagline,
            description:description,
            first_brewed:first_brewed,
            brewers_tips:brewers_tips,
            attenuation_level:attenuation_level,
            contributed_by:contributed_by
        };

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        };

        fetch("https://ironbeer-api.herokuapp.com/beers/new", options)
        .then(()=>{
            console.log("se creo con exito")
            this.setState({
                
                name:'',
                tagline:'',
                description:'',
                first_brewed:'',
                brewers_tips:'',
                attenuation_level:'',
                contributed_by:''
            })
        })
        .catch(err => console.log(err));

    };

        handleChange = event => {
            const {name, value} = event.target
            this.setState({[name]:value});
        }


        render(){
            return(
                <div className="container">
                    <NavBar/>
 
                    <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input className="form-control" type="text" name="name" value={this.state.name} onChange={e=> this.handleChange(e)} />
                            </div>
                            <div className="form-group">
                            <label htmlFor="Tagline">Tagline</label>
                            <input className="form-control" type="text" name="tagline" value={this.state.tagline} onChange={e=> this.handleChange (e)}/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" name="description" value={this.state.description} onChange={e=>this.handleChange(e)}/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="first_brewed">First Brewed</label>
                            <input className="form-control"  type="text" name="first_brewed" value={this.state.first_brewed} onChange={e=> this.handleChange (e)}/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="brewers_tips">Brewers Tips</label>
                            <input className="form-control"  type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={e=> this.handleChange(e)}/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="attenuation_level">Attenuation Level</label>
                            <input className="form-control"  type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={e=> this.handleChange(e)}/>
                            </div>
                            <div className="form-group">                       
                            <label htmlFor="contributed_by">Contributed</label>
                            <input className="form-control"  type="text" name="contributed_by" value={this.state.contributed_by} onChange={e=> this.handleChange(e)}/> 
                            </div> 

                            <input  className="btn btn-primary" type="submit" value="crear cerveza"/>
   
                    </form>
                </div>
            )
        }

}

export default AddBeer;