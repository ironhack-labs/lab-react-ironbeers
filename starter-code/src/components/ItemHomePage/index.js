import React from 'react';
import "./styles.css";

class ItemHomePage extends React.Component {
    render(){
        const { img, title, description} = this.props;
        console.log({ img, title, description});
        return (
            <div>
                <img src={img} alt={title}/>
                <div> {title} </div>
                <div> {description}</div>

            </div>
        )
    }
}

export default ItemHomePage;