import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navlink extends Component {
    render() {
        return <Link {...this.props} className="nav-link"/>
    }
}



