import React, {Component} from 'react';


class AddBeer extends Component {
    state={
        image_url:'',
        name:'',
        tagline:'',
        first_brewed:'',
        atenuation_level:'',
        description:'',
        contributed_by:''
    };

    handleFormSubmit = event => {
        event.preventDefault();
    
        const image = this.state.image_url;
        const name = this.state.name;
        const tagline = this.state.tagline;
        const firstBrewed= this.statefirst_brewed;
        const atenuationLevel = this.state.atenuation_level;
        const description = this.state.description;
        const contributed_by = this.state.contributed_by;

        const data = {
            image:image,
            name:name,
            tagline:tagline,
            firstBrewed:firstBrewed,
            atenuationLevel:atenuationLevel,
            description:description,
            contributed_by:contributed_by
        };

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        };

        fetch("https://ironbeer-api.herokuapp.com/beers/new")
        .then(()=>{
            this.setState({
                image_url:'',
                name:'',
                tagline:'',
                first_brewed:'',
                atenuation_level:'',
                description:'',
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
                <div>
                    <form onSubmit={this.handleFormSubmit}>

                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={e=> this.handleChange}/>

                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={e=> this.handleChange}/>

                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={e=> this.handleChange}/>

                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={e=> this.handleChange}/>

                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={e=> this.handleChange}/>

                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={e=> this.handleChange}/>
                            
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={e=> this.handleChange}/>
                            
                                

                        
                    </form>
                </div>
            )
        }

}