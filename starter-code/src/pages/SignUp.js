// import React, { Component } from 'react';
// import axios from 'axios';
// import qs from 'qs';
// // import { signup } from '../utils/auth';
// import Header from '../components/Header';

// export default class Signup extends Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   state = {
//     username: '',
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: '',
//   };

//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     axios({
//       method: 'POST',
//       data: qs.stringify(this.state),
//       url: 'https://ih-beers-api.herokuapp.com/auth/signup',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     })
//       .then((response) => {
//         localStorage.setItem('user', JSON.stringify(response.data));
//         this.props.history.push('/');
//       })
//       .catch((error) => {
//       });
//   }

//   render() {
//     return (
//       <div className="signup">
//         <Header />
//         <div className ="signup-container">
//           <form onSubmit={this.handleSubmit}>
//             <input
//               onChange={this.handleChange}
//               value={this.state.username}
//               placeholder="username"
//               type="text"
//               name="username"
//             />
//             <input
//               onChange={this.handleChange}
//               value={this.state.firstname}
//               placeholder="firstname"
//               type="text"
//               name="firstname"
//             />
//             <input
//               onChange={this.handleChange}
//               value={this.state.lastname}
//               placeholder="lastname"
//               type="text"
//               name="lastname"
//             />
//             <input
//               onChange={this.handleChange}
//               value={this.state.email}
//               placeholder="email"
//               type="text"
//               name="email"
//             />
//             <input
//               onChange={this.handleChange}
//               value={this.state.password}
//               placeholder="password"
//               type="password"
//               name="password"
//             />
//             <button type="submit">Submit </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
