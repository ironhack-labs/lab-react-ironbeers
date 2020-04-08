import React from "react";
import axios from "axios";
import { withRouter } from 'react-router'

class Add extends React.Component {
  //creating refences for add beer form inputs (properties of class))
  nameRef = React.createRef();
  taglineRef = React.createRef();
  descriptionRef = React.createRef();
  first_brewedRef = React.createRef();
  attenuation_levelRef = React.createRef();
  brewers_tipsRef = React.createRef();
  contributed_byRef = React.createRef();
  fileRef = React.createRef();
addFormData = new FormData();
  fileHandler(e){
    this.addFormData.append("picture",e.target.files[0]);
  }

  constructor(props){
    super(props)
  }

  createBeer = (event) => {
    event.preventDefault(); // preventing default event (post data to server=>page refresh)
    
this.addFormData.set('name',this.nameRef.current.value)
this.addFormData.set('tagline', this.taglineRef.current.value)
this.addFormData.set('description', this.descriptionRef.current.value)
this.addFormData.set('first_brewed', this.first_brewedRef.current.value)
this.addFormData.set('attenuation_level', this.attenuation_levelRef.current.value)
this.addFormData.set('brewers_tips', this.brewers_tipsRef.current.value)

this.addFormData.set('contributed_by', this.contributed_byRef.current.value)

    axios({
      method:'post',
        url:"https://ih-beers-api.herokuapp.com/beers/new",
        data:this.addFormData,
        headers:{'Content-Type':'multipart/form-data'}
      })
      .then((res) => {
        console.log(res)
        this.props.history.push(`/beer/${res.data._id}`)
      })
      .catch((err) => {
        alert("something went wrong");
      });
    event.currentTarget.reset();
  };

  render() {
    return (
      <div className="container">
        <form className="beer-add" onSubmit={this.createBeer}>
          <label></label>
          <input
            className="form-control "
            type="text"
            name="name"
            ref={this.nameRef}
            placeholder="NAME"
          />

          <label></label>
          <input
            className="form-control"
            type="text"
            name="tagline"
            ref={this.taglineRef}
            placeholder="tagline"
          />

          <label></label>
          <textarea
            className="form-control"
            type="text"
            name="description"
            ref={this.descriptionRef}
            placeholder="description"
          />

          <label></label>
          <input
            className="form-control"
            type="text"
            name="first_brewed"
            ref={this.first_brewedRef}
            placeholder="first_brewed"
          />

          <label></label>
          <input
            className="form-control"
            type="text"
            name="attenuation_level"
            ref={this.attenuation_levelRef}
            placeholder="attenuation_level"
          />

          <label></label>
          <input
            className="form-control"
            type="text"
            name="brewers_tips"
            ref={this.brewers_tipsRef}
            placeholder="brewers_tips"
          />

          <label></label>
          <input
            className="form-control"
            type="text"
            name="contributed_by"
            ref={this.contributed_byRef}
            placeholder="contributed_by"
          />
          <input type="file" ref="fileRef" onChange={(event)=>this.fileHandler(event)}/>
          <button className="btn btn-primary" type="submit">
            Add Beer
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Add);
