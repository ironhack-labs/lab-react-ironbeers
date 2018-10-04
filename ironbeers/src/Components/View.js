import React from "react";


export default class View extends React.Component{
    render() {
        let {name, image_url, tagline, _id} = this.props
        return(
            <div>
                <img src={image_url} alt="" width={100} height={300}/>
                <div style={{display:"inline-block"}}>
                <h1><a href={`/single/${_id}`}>{name}</a></h1>
                <p>{tagline}</p>
                </div>
            </div>
        )
    }
}