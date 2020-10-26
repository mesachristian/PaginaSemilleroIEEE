import React, { Component } from 'react';
import './styles.css';

class Card extends Component{

    render(){
        const {image, title, description, index, onClick} = this.props;

        return(
            <div className="card" onClick={() => onClick(index)}>
                
                <img className="card-image" src={image}/>
                

                <div className="card-title">
                    <h1>{title}</h1>
                </div>

                <div className="card-description">
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}

export default Card;