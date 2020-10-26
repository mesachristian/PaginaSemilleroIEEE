import React, { Component } from 'react';
import './styles.css';

// COMPONENTS
import Card from './components/Card';
import ProyectLayout from './components/ProyectLayout';

// Resources
import clima from './resources/clima.jpg';

// OJO CON ESTO DEBE EXISTIR ALGO MAS FACIL
import ModalController from '../ModalController';

class Proyects extends Component{

    constructor(props){
        super(props);
        this.state = {
            proyects : buildProyectList(),
        };

        this.proyectClicked = this.proyectClicked.bind(this);
    }

    proyectClicked(proyectIdx){
        console.log(proyectIdx + "Clicked!!!!");
        let proyects = this.state.proyects;
        let proyect = proyects[proyectIdx];
        proyect.modalActive = true;
        proyects[proyectIdx] = proyect;
        this.setState({ proyects : proyects, });
    }

    desactivateModal(proyectIdx){
        let proyects = this.state.proyects;
        let proyect = proyects[proyectIdx];
        proyect.modalActive = false;
        proyects[proyectIdx] = proyect;
        this.setState({ proyects : proyects, });
    }

    render(){
        
        const {proyects} = this.state;

        return(
            <div className="proyects">

                <div class='proyects-title'>
                    Proyectos IA
                </div>

                {proyects.map((proyect, proyectIdx) => {
                    console.log(proyect.title)
                    return(
                        <Card {...proyect} index={proyectIdx} onClick={(index) => this.proyectClicked(index)}/>
                    );
                })}

                {proyects.map((proyect, proyectIdx) => {
                    console.log(proyect)
                    return(
                        <ModalController 
                            activate={proyect.modalActive} 
                            desactivateListener={() => this.desactivateModal(proyectIdx)}
                        >
                            <ProyectLayout {...proyect}/>
                        </ModalController>
                    );
                })}

            </div>
        );
    }
}

function buildProyectList(){

    let proyects = [];
    for(let i=0; i < 9; i++){
        let cardProps = {
            image : clima,
            title : 'Time series forecasting ' + i,
            description : 'This tutorial is an introduction to time series forecasting using TensorFlow. It builds a few different styles of models including Convolutional and Recurrent Neural Networks (CNNs and RNNs).',
            modalActive : false, 
            contributors : ['Juan', 'Christian'],
            links : [{name: 'Github', url : 'https://github.com/mesachristian/PaginaSemilleroIEEE'},
            {name: 'Colab', url : 'https://colab.research.google.com/drive/1tsmdRfv2XF0Zxid4WY769c2sKW5yOQIq?usp=sharing'}]
        };

        proyects.push(cardProps);
    }

    return proyects;
}

export default Proyects;