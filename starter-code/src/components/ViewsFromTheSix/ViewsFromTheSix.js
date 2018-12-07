import React from "react";
export default class ViewsFromTheSix extends React.Component{
   render() {
       let {name, image_url, tagline, _id} = this.props
       return(
           <div>
               <img src={image_url} alt="" width={100} height={200}/>
               <div style={{display:"inline"}}>
               <h1><a href={`/singlebeer/${_id}`}>{name}</a></h1>
               <p>{tagline}</p>
               </div>
           </div>
       )
   }
} 