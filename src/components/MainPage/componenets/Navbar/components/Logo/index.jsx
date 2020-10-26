import React from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';

import logo from './resources/logo.png';

class Logo extends React.Component{

    render(){

        const { appName , onBrandClick } = this.props;

        return(
            <Link to="" className="nav-brand" onClick={() => onBrandClick()}>
                <img className="nav-logo" alt="Home" src={logo} width="99" height="66"/>
                <span>{appName}</span>
            </Link>
        );

    }
}

export default Logo;

