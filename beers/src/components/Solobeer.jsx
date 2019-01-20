import React from "react"
import {getOne} from "../lib/beerApi"
import { Beer } from "../components/Beer";

export class Solobeer extends React.Component {
    constructor(props){
        super(props)
        this.state={beers:[]}
    }
    
    componentDidMount(){
        console.log(this.props.match.params)
        getOne(this.props.match.params).then(({data})=>{
          return  this.setState({beers:data})
        })
    }
      render() {
        const {beers}=this.state
        return (
          <div>
            <Beer key={beers._id} props={beers}/>
          </div>
        );
      }
    }
    