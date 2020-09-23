import React, { Component } from 'react';
import './styles.css';

class Home extends Component{

    render(){
        return(
            <div>
                <div className="main-header">
                    <div className="main-header-content">
                        <h1 className="main-header-title">SPS IEEE Javeriana</h1>
                        <p className="main-header-body">
                            La primera sociedad del IEEE fundada en 1948. Nuestro semillero
                            esta habilitando nuevas tecnologias para la generación, transformación
                            e interpretación de la información. Nuestros miembros son entusiastas del
                            aprendizaje autodidacta y con grandes habilidades para el trabajo en equipo.
                        </p>
                    </div>
                </div>

                <div className="objectives-header">
                    <div className="objectives-header-content">
                        <h1 className="objectives-header-title">Objetivos...</h1>
                        <ul className="objectives-header-body">
                            <li>
                                Formar una comunidad de apoyo en pro del aprendizaje y la generación de soluciones.
                            </li>

                            <li>
                                Ser pioneros en Colombia para la aplicación de la inteligencia artificial en 
                                soluciones que traigan valor al mercado y a la sociedad.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;