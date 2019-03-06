import React,{Component} from 'react';
import axios from 'axios';
class Newbeer extends Component{

  handleSubmit = (e) => {
    let form ={
      "name":"cerveza",
      "tagline":"prueba",
      "description":"nada",
      "first_brewed":"nada",
      "brewers_tips":"brewedtips",
      "attenuation_level":4,
      "contributed_by":"contributed_level"}
    let x=document.getElementById('name').value
     console.log('docu',document.getElementById('name').value)
    axios.post('https://ironbeer-api.herokuapp.com/beers/new',
      {
        "name":document.getElementById('name').value,
        "tagline":document.getElementById('tagline').value,
        "description": document.getElementById('description').value,
        "first_brewed": document.getElementById('first_brewed').value,
        "brewers_tips":document.getElementById('brewers_tips').value,
        "attenuation_level":document.getElementById('attenuation_level').value,
        "contributed_by":document.getElementById('contributed_by').value
      }

        // document.getElementById('name').value

  )
      .then(res=>{
        console.log(res)
      })

      .catch(err=>{
        console.log(err)
      })

  }

  render() {
    return(
      <div>
        <div className="input-field"><br/>
          <input
            name="name"
            id="name"
            type="text"
          />
          <label htmlFor="codigo_invitacion">name</label>
        </div>
        <div className="input-field"><br/>
          <input
            id="tagline"
            name="tagline"
            type="text"
          />
          <label htmlFor="tagline">tagline</label>
        </div>
        <div className="input-field"><br/>
          <input
            id="description"
            name="description"
            type="text"
          />
          <label htmlFor="description">description  </label>
        </div>
        <div className="input-field"><br/>
          <input
            id="first_brewed"
            name="first_brewed"
            type="text"
          />
          <label htmlFor="first_brewed">  first brewed  </label>
        </div>
        <div className="input-field"><br/>
          <input
            id="brewers_tips"
            name="brewers_tips"
            type="text"
          />
          <label htmlFor="brewers_tips">  brewed tips </label>
        </div>
        <div className="input-field"><br/>
          <input
            id="attenuation_level"
            name="attenuation_level"
            type="number"
          />
          <label htmlFor="attenuation_level">  atenuation level  </label>
        </div>
        <div className="input-field"><br/>
          <input
            id="contributed_by"
            name="contributed_by"
            type="text"
          />
          <label htmlFor="contributed_by">    contributed_level  </label>
        </div>
        <div className="input-field"><br/>
          <button onClick={this.handleSubmit} className="btn waves-effect waves-light"> Crear cuenta</button>
        </div>
      </div>
    );
  }
}

export default Newbeer;