import React from 'react';
import axios from 'axios';
import Header from './Header';


// class SingleBeer extends React.Component {
//   constructor(props){
//       super(props);
//       this.state = { 


//        };
//   }

// //   renderSingleBeer = () => {
// //     //let randomBeer = this.props.beers.find(this.props.beers._id)

// //     return(
//     //     <div class="col s12 m4">
//     //     {
//     //         this.state.ready ?
//     //         <p>Loading...</p>
//     //         :
//     //         <div class="card horizontal">
//     //             <div class="card-image">
//     //                 <img src={this.props.beer.image_url} alt="beer-img" />
//     //             </div>
//     //         <div class="card-stacked">
//     //             <div class="card-content">
//     //             <p>{this.props.beer.name}</p>
//     //             </div>
               
//     //         </div>
//     //         </div>
//     //     }
//     // </div>
    



// render(){
//     const allTheBeers = this.props.allTheBeers
//     const theID = this.props.match.params.theID;

//         const singleBeer = allTheBeers.find((eachB)=>{
//             return eachB._id === theID
//         })

//    if(this.props.ready)
//     return(
//         <div class="col s12 m4">
//         {
//             this.state.ready ?
//             <p>Loading...</p>
//             :
//             <div class="card horizontal">
//                 <div class="card-image">
//                     <img src={singleBeer.image_url} alt="beer-img" />
//                 </div>
//             <div class="card-stacked">
//                 <div class="card-content">
//                 <p>{singleBeer.name}</p>
//                 </div>
               
//             </div>
//             </div>
//         }
//     </div>
    
//     )
// }

// }

// export default SingleBeer;

const SingleBeer = (props) => {
    console.log(props);
    return (<div>
        <Header />
    {/* <h1>{props.location.state.beer.image_url}</h1> */}
    <div className="col s12 m4">
       {
           
            <div className="card horizontal">
                <div className="card-image">
                    <img src={props.location.state.beer.image_url} alt="beer-img" />
                </div>
            <div className="card-stacked">
                <div className="card-content">
                <p>{props.location.state.beer.name}</p>
                </div>
               
            </div>
            </div>
        }
    </div></div>
    
    );
};

export default SingleBeer;