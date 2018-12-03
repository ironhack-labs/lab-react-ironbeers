import React,{Component} from 'react';
import Header from "./Header";
import axios from 'axios';

class NewBeer extends Component {
    constructor(props) {
        super(props);
        this.state={
            form: {
                name: "",
                tagline: "",
                description: "",
                first_brewed: "",
                brewers_tips: "",
                attenuation_level: 0,
                contributed_by: ""
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {form} = this.state;
        axios.post('https://ironbeer-api.herokuapp.com/beers/new', form)
            .then (res =>{
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    };

    handleChange=  (e) => {
        const {form} = this.state;
        let field = e.target.name;
        form[field] = e.target.value;
        console.log(form);
        //this.setState({form});
    };

    render(){
        return(
            <div>
                <Header/>
                <form onSubmit={this.handleSubmit} style={{marginTop:150}}>
                    <div>
                        <label htmlFor="">
                            Name:
                            <input type="text" name="name" onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            Tagline:
                            <input type="text" name="tagline"onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            Description:
                            <textarea name="description" onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            First Brewed:
                            <input type="text" name="first_brewed" onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            Brewer Tips:
                            <input type="text" name="brewers_tips" onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            Attenuation Level:
                            <input type="number" name="attenuation_level" onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            Contributed By:
                            <input type="text" name="contributed_by" onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <button type="submit">Create New Beer</button>
                    </div>
                </form>
            </div>
        )
    }

}


export default NewBeer;