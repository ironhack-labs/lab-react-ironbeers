import React from 'react'

// This has to be a Class Component

export default function ShowBeer(props) {

    state = {
        beers:[]
      }

    componentDidMount() {
        console.log('Beers.js - component did mount');
        fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => res.json())
      .then(result => {
        console.log(result)
        this.setState({beers: result})
      })
      .catch(e => console.log(e))
      }

    return (
        <div>
            {props.match.params.id}
        </div>
    )
}
