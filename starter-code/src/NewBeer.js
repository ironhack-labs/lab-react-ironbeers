import React from 'react';
import axios from 'axios';

export default class FormUser extends React.Component {
                 state = {
                   name: "",
                   tagline: "",
                   description: "",
                   firstbrewed: "",
                   brewersTip: "",
                   attenuationLevel: 0,
                   contributedBy: ""
                 };

                 handleChange = event => {
                   this.setState({ [event.target.name]: event.target.value });
                
                 };
                 handleSubmit = event => {
                   event.preventDefault();
                   const {
                     name,
                     tagline,
                     description,
                     firstbrewed,
                     brewersTip,
                     attenuationLevel,
                     contributedBy
                   } = this.state;
                   axios
                     .post("https://ih-beers-api2.herokuapp.com/beers/new", {
                       name,
                       tagline,
                       description,
                       firstbrewed,
                       brewersTip,
                       attenuationLevel,
                       contributedBy
                     })
                     .then(res => {
                       console.log(res);
                       console.log(res.data);
                     })
                     .catch(err => {
                       console.log(err);
                     });
                 };
                 render() {
                   const {
                     name,
                     tagline,
                     description,
                     firstbrewed,
                     brewersTip,
                     attenuationLevel,
                     contributedBy
                   } = this.state;
                   return (
                     <form style={{padding: "4vh"}}onSubmit={this.handleSubmit}>
                       <div className="form-group">
                         <label htmlFor="formGroupExampleInput1">Name</label>
                         <input
                           className="form-control"
                           type="text"
                           name="name"
                           onChange={this.handleChange}
                           value={name}
                         />
                       </div>
                       <div className="form-group">
                         <label htmlFor="formGroupExampleInput1">Tagline</label>
                         <input
                           className="form-control"
                           type="text"
                           name="tagline"
                           onChange={this.handleChange}
                           value={tagline}
                         />
                       </div>
                       <div className="form-group">
                         <label htmlFor="exampleFormControlTextarea1">
                           Description
                         </label>
                         <textarea
                           className="form-control"
                           type="text"
                           name="description"
                           onChange={this.handleChange}
                           value={description}
                           id="exampleFormControlTextarea1"
                           rows="3"
                         />
                       </div>
                       <div className="form-group">
                         <label htmlFor="formGroupExampleInput1">
                           Firstbrewed
                         </label>
                         <input
                           className="form-control"
                           type="text"
                           name="firstbrewed"
                           onChange={this.handleChange}
                           value={firstbrewed}
                         />
                       </div>
                       <div className="form-group">
                         <label htmlFor="formGroupExampleInput1">BrewersTip</label>
                         <input
                           className="form-control"
                           type="text"
                           name="brewersTip"
                           onChange={this.handleChange}
                           value={brewersTip}
                         />
                       </div>
                       <div className="form-group">
                         <label htmlFor="formGroupExampleInput1">
                           attenuationLevel
                         </label>
                         <input
                           className="form-control"
                           type="number"
                           name="attenuationLevel"
                           onChange={this.handleChange}
                           value={attenuationLevel}
                         />
                       </div>
                       <div className="form-group">
                         <label htmlFor="formGroupExampleInput1">
                           Contributed By
                         </label>
                         <input
                           className="form-control"
                           type="text"
                           name="contributedBy"
                           value={contributedBy}
                           onChange={this.handleChange}
                         />
                       </div>

                       <button type="submit">Submit</button>
                     </form>
                   );
                 }
               }
          
      