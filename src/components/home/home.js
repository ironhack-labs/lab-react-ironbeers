import React, { Component } from 'react'
import cerveza1 from '../../public/7-buenas-razones-para-tomar-cerveza.png'
import cerveza2 from '../../public/cerveza_sostenibilidad-680x487.jpg'
import cerveza3 from '../../public/cervezas-de-sabores-interior.jpg'

import { Link } from 'react-router-dom'

import './home.css'

class Home extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render () {

        return (
            <div>
                <h1>Iron Beers</h1>
                <section>
                    <Link to = "/beers"><img src= {cerveza1} alt="cerveza1"></img>
                    <h3>All Beers</h3></Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non tortor nibh. Vestibulum orci elit, pulvinar eget quam eget, faucibus mollis lectus. Suspendisse eget volutpat nulla, vitae pharetra lectus. Fusce pretium pellentesque erat. Mauris vitae nibh in felis gravida interdum at id nisl. Nunc lacinia, odio ac pretium venenatis, leo est egestas risus, ac dignissim dui felis in ex. Quisque tortor mi, dapibus ut lobortis vel, accumsan in justo. Fusce molestie venenatis erat, vitae placerat nisi pretium ut. Mauris ultricies hendrerit felis, non lobortis enim dictum a. Aenean sit amet mollis felis. </p>
                </section>
                <section>
                    <img src= {cerveza2} alt="cerveza2"></img>
                    <h3>Random Beer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non tortor nibh. Vestibulum orci elit, pulvinar eget quam eget, faucibus mollis lectus. Suspendisse eget volutpat nulla, vitae pharetra lectus. Fusce pretium pellentesque erat. Mauris vitae nibh in felis gravida interdum at id nisl. Nunc lacinia, odio ac pretium venenatis, leo est egestas risus, ac dignissim dui felis in ex. Quisque tortor mi, dapibus ut lobortis vel, accumsan in justo. Fusce molestie venenatis erat, vitae placerat nisi pretium ut. Mauris ultricies hendrerit felis, non lobortis enim dictum a. Aenean sit amet mollis felis. </p>
                </section>
                <section>
                    <img src= {cerveza3} alt="cerveza3"></img>
                    <h3>New Beer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non tortor nibh. Vestibulum orci elit, pulvinar eget quam eget, faucibus mollis lectus. Suspendisse eget volutpat nulla, vitae pharetra lectus. Fusce pretium pellentesque erat. Mauris vitae nibh in felis gravida interdum at id nisl. Nunc lacinia, odio ac pretium venenatis, leo est egestas risus, ac dignissim dui felis in ex. Quisque tortor mi, dapibus ut lobortis vel, accumsan in justo. Fusce molestie venenatis erat, vitae placerat nisi pretium ut. Mauris ultricies hendrerit felis, non lobortis enim dictum a. Aenean sit amet mollis felis. </p>
                </section>
            </div>
        )
    }
}

export default Home