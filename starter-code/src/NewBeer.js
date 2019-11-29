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
                     <form onSubmit={this.handleSubmit}>
                       <label>
                         Name
                         <input
                           type="text"
                           name="name"
                           onChange={this.handleChange}
                           value={name}
                         />
                       </label>
                       <br />
                       <label>
                         Tagline
                         <input
                           type="text"
                           name="tagline"
                           onChange={this.handleChange}
                           value={tagline}
                         />
                       </label>
                       <br />
                       <label>
                         Description
                         <input
                           type="text"
                           name="description"
                           onChange={this.handleChange}
                           value={description}
                         />
                       </label>
                       <br />
                       <label>
                         Firstbrewed
                         <input
                           type="text"
                           name="firstbrewed"
                           onChange={this.handleChange}
                           value={firstbrewed}
                         />
                       </label>
                       <br />
                       <label>
                         BrewersTip
                         <input
                           type="text"
                           name="brewersTip"
                           onChange={this.handleChange}
                           value={brewersTip}
                         />
                       </label>
                       <br />
                       <label>
                         attenuationLevel
                         <input
                           type="text"
                           name="attenuationLevel"
                           onChange={this.handleChange}
                           value={attenuationLevel}
                         />
                       </label>

                       <label>
                         Contributed By
                         <input
                           style={{ border: "1px solid black" }}
                           type="text"
                           name="contributedBy"
                           value={contributedBy}
                           onChange={this.handleChange}
                         />
                       </label>
                       <button type="submit">Submit</button>
                     </form>
                   );
                 }
               }
          
      