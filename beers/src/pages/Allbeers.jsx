import React from "react";
import {getAll} from "../lib/beerApi"
import { Beer } from "../components/Beer";
import { Beersdiv } from "../lib/styledcomps";
import { Input } from "../components/Input";

export class Allbeers extends React.Component {
constructor(props){
    super(props)
    this.state={beers:[],search:"",all:[]}
}

handleSearch = e =>{
  let {all} = this.state
  const search=e.target.value;
  const filetered = all.filter(el=>el.name.toLowerCase().includes(e.target.value.toLowerCase()))
  this.setState({beers:filetered,search})
}

componentDidMount(){
    getAll().then(({data})=>{
      return  this.setState({beers:data,all:data})
    })
}
  render() {
    const {beers,search}=this.state
    return (
      <div>
        <Input data={search} infoname="search" func={this.handleSearch}></Input>
        <Beersdiv>
        {beers.map((e,i)=><Beer key={e._id} props={e}/>)}
        </Beersdiv>
      </div>
    );
  }
}
