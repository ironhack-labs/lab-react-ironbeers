import React from 'react';
import NavBar from '../NavBar/NavBar';


class NewBeer extends React.Component {
    state = {
      beer: '',
      tagline: '',
      description: ''
     }


     changeHandler = (event) => {
         let {name,value} = event.target
         this.setState({
             [name]: value
         })
     }

     render() {
        return (
            <div>
                <NavBar />
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="name">Name</label><br></br>
                    <input type="text" name="name" onChange={this.changeHandler}></input><br></br>
                    <label htmlFor="tagline">Tagline</label><br></br>
                    <input type="text" name="tagline" onChange={this.changeHandler}></input><br></br>
                    <label htmlFor="description">Description</label><br></br>
                    <input type="text" name="description" onChange={this.changeHandler}></input><br></br>
                    <label htmlFor="firstBrewed">First Brewed</label><br></br>
                    <input type="text" name="firstBrewed" onChange={this.changeHandler}></input><br></br>
                    <label htmlFor="brewersTips">Brewers Tips</label><br></br>
                    <input type="text" name="brewersTips" onChange={this.changeHandler}></input><br></br>
                    <label htmlFor="attenuationLevel">Attenuation Level</label><br></br>
                    <input type="number" name="attenuationLevel" onChange={this.changeHandler}></input><br></br>
                    <label htmlFor="contributedBy">Created By</label><br></br>
                    <input type="text" name="contributedBy" onChange={this.changeHandler}></input><br></br>
                    <button type="submit" onChange={this.changeHandler}>Add new</button>
                </form>
            </div>
        )
        }
    } 




export default NewBeer
