import React from "react";
import { Nav } from "../components/Nav";
import {getAll} from "../lib/beerApi"
import { Beer } from "../components/Beer";
import { Beersdiv } from "../lib/styledcomps";

export class Allbeers extends React.Component {
constructor(props){
    super(props)
    this.state={beers:[]}
}

componentDidMount(){
    getAll().then(({data})=>{
      return  this.setState({beers:data})
    })
}
  render() {
    const {beers}=this.state
    return (
      <div>
        <Beersdiv>
        {beers.map((e,i)=><Beer key={e._id} props={e}/>)}
        </Beersdiv>
      </div>
    );
  }
}
