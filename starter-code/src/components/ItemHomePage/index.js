import React from 'react';
import "./styles.css";
import { Link } from "react-router-dom";

class ItemHomePage extends React.Component {
    render(){
        const {img,title,description,url} = this.props;
        return (
            <div>
                <img src={img} alt={title}/>
                <Link to={url}>  <div> {title} </div> </Link>
                <div> {description}</div>
            </div>
        )
    }
}

export default ItemHomePage;