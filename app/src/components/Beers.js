import React, {Component} from 'react';
import {getBeers} from '../services/beers';


class Beers extends Component {


    state ={data:[]}

    componentDidMount(){
        getBeers()   
        .then(data => {
          this.setState({data})
        })
        .catch(err => {
            console.log(err);
        })
      };

   render(){
   
   let {data} = this.state;
   console.log(data);    
       
return(
    <div>

    {data.map((i,index)=> 
         <div key= {index} className='uk-card uk-card-default'>
         <div className='uk-card-media-top'>
         <img src ={i.image_url} alt ='alv' width='100px' height ='100px'/>
         </div>
         <div className ='uk-card-body'>
         <h3><a href={`/beers/${i._id}`}>{i.name}</a></h3>
         <p> Created By:{i.contributed_by}</p>
         </div>
         </div>
         
        )}
  

    </div>
)
   }
}

export default Beers;