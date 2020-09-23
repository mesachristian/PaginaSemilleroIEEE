import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

// STYLES
import './styles.css';

// COMPONENTS
import Contact from './components/Contact';
import Courses from './components/Courses';
import Proyects from './components/Proyects';
import Home from './components/Home';

class Body extends Component{

    render(){
        return(
            <div className="body">
                <Switch>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    
                    <Route path="/courses">
                        <Courses/>
                    </Route>
                    
                    <Route path="/proyects">
                        <Proyects/>
                    </Route>
                    
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Body;