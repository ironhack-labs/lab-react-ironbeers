import React from 'react'
import BeerServices from '../../services/beers.services'
import Header from '../header/Header'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state= {
            fields: {
                name: "",
                tagline: "",
                description: "",
                first_brewed: "",
                brewer_tips: "",
                attenuation_level: "",
                contribuet
            }
        }
    }
}