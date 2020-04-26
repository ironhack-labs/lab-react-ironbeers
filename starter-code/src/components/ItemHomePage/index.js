import React from 'react';
import "./styles.css";
import { Link } from "react-router-dom";

class ItemHomePage extends React.Component {
    render(){
        const {img,title,description,url} = this.props;
        return (
            <div className="Item">
                <img className="imgItem" src={img} alt={title}/>
                <Link className="link" to={url}>  <div className="title"> {title} </div> </Link>
                <div className="description"> {description}</div>
            </div>
        )
    }
}

export default ItemHomePage;