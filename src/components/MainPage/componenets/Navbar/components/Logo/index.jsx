import React from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';

class Logo extends React.Component{

    render(){

        const { appName , onBrandClick } = this.props;

        return(
            <Link to="" className="nav-brand" onClick={() => onBrandClick()}>
                <span>{appName}</span>
            </Link>
        );

    }
}

export default Logo;

