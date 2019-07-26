import React from 'react';
import '../../App.css';
import Home from '../../Components/home/home/Home'
function AddBeer(props) {
  function middleware(e){
    e.preventDefault();
    props.handleChange(e);
  }
  return (
    <div className="App">
     <form onSubmit={props.handleSubmit}>
       <label>Name of Beer : </label>
       <input name="name"  onChange={middleware} type="text"></input>
       <label>Tagline of Beer : </label>
       <input name="tagline" onChange={middleware} type="text"></input>
       <label>Description :</label>
       <input name="description" onChange={middleware} type="text"></input>
       <label>First Brewed : </label>
       <input name="brewed" onChange={middleware} type="text"></input>
       <label>Brewers Tips : </label>
       <input name="tips" onChange={middleware} type="text"></input>
       <label>Attenuation Level : </label>
       <input name="attenuation" onChange={middleware}type="number"></input>
       <label>Your name : </label>
       <input name="contributor" onChange={middleware} type="text"></input>
       <input type="submit" value="Submit" />
     </form>
    </div>
  );
}

export default AddBeer;
