 import React from 'react';
 import { Link } from 'react-router-dom';
 import axios from "axios";
// import useFetch from "react-fetch-hook";

// //question: here I get error message data.find (line 21) is not a function

// const fetchData = () => {
//     return axios.get("https://ih-beers-api2.herokuapp.com/beers")
//     .then((response) => console.log(response.data));}

// const data = fetchData();
// console.log('checking if data is received:', data);


class Beerdetail extends React.Component {
    state = {
		beerToShow: []
	}
     //const { params } = props.match;
     //console.log('1st checking props:', props);
     //console.log('2nd checking if params:', params);

     //const beerToShow = props.beerData.find(elm => elm._id === params._id);
     //console.log('3rd checking if beer is found:', beerToShow.name.common);
     

    componentDidMount() {
            const Id = this.props.match.params._id;
            console.log("checking id:", Id);
       
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/${Id}`)
            .then(response => {
               console.log("1st checking api returning data of one beer:", response);
               this.setState({
                   beerToShow: response.data
               })
           })
            .catch(err => console.log(err))
           }	

render() {
    const { beerToShow } = this.state;
    //if (!this.state.beerToShow) return <></>
     return (
         <div>
              <header> <Link to="/">Home</Link></header>
              <img src={beerToShow.image_url} />
                 <p>{beerToShow.name}</p>
                 <p>{beerToShow.tagline}</p>
                 <p>{beerToShow.first_brewed}</p>
                 <p>{beerToShow.attenuation_level}</p>
                 <p>{beerToShow.description}</p>
                 <p>{beerToShow.contributed_by}</p> 

         </div>
     )
   }
 }

 export default Beerdetail;