import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { createBeer} from "../services/Beers";

export default class CreateBeer extends Component {
    state={
        name:"",
        tagline:"",
        description:"",
        first_brewed:"",
        brewer_tips:"",
        attenuation_level:0,
        contributed_by:""
    }
    render() {
        return (
            <div>
                si entra
            </div>
        )
    }
}
