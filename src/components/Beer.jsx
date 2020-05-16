import React from 'react'

export default function Beer(props) {
    console.log("testTeo", props)
    return (
        <div>
          {props.name}
          <img src={props.image_url} height = "400px"/>
        </div>
    )
}
