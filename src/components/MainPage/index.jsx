import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// STYLES
import './styles.css';

// COMPONENTS
import Navbar from './componenets/Navbar';
import Body from './componenets/Body';

class MainPage extends Component{

    render(){

        const navbarProps = {
            appName : '',
            items : buildNavbarItems()
        };

        return(
            <div className="main">
                <Router>
                    <Navbar {...navbarProps}/>
                    <Body/>
                </Router>
            </div>
        );
    }
}

function buildNavbarItems(){

    let items = [];
    let element_1 = { name : 'Contacto' , iconName : 'address-book', hasIcon : true, isSelected : false, url: "/contact" };
    let element_2 = { name : 'Cursos' , iconName : 'book', hasIcon : true, isSelected : false, url: "/courses" };
    let element_3 = { name : 'Proyectos' , iconName : 'project-diagram', hasIcon : true, isSelected : false, url: "/proyects" };
    let element_4 = { name : '' , iconName : 'home', hasIcon : true, isSelected : false, url: "/" };
  
    items.push(element_1);
    items.push(element_2);
    items.push(element_3);
    items.push(element_4);
    
    return items;
}

export default MainPage;


/***
import React, { Component } from 'react';
import './styles.css';

class MainPage extends Component{

    render(){
        return(
            
        );
    }
}

export default MainPage;
 */