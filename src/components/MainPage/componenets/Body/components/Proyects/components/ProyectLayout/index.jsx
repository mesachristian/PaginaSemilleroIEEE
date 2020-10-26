import React, { Component } from 'react';
import './styles.css';

class ProyectLayout extends Component{

    render(){
        const {image, title, description, contributors, links} = this.props;

        return(
            <div className="proyectLayout">
                
                <img className="proyect-image"src={image}/>

                <div className="proyect-body">
                    <div className="proyect-title">
                        <h1>{title}</h1>
                    </div>

                    <div className="proyect-description">
                        <p>{description}</p>
                    </div>

                    <div className="proyect-list">
                        <h2>Contributors:</h2>
                        <ul>
                            {contributors.map((contributor) => {
                                return <li>{contributor}</li>;
                            })}
                        </ul>
                    </div>

                    <div>
                        <h2 className="proyect-list">Links:</h2>
                        <ul>
                            {links.map((link) => {
                                return (
                                <form action={link.url} target="_blank">
                                    <input className="proyect-link-button"type="submit" value={link.name} />
                                </form>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProyectLayout;