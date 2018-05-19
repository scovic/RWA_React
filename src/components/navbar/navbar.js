import React, { Component } from 'react';
import Navlink from './navlink';
import Dropdown from './dropdown';
import Search from './search';


export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark" >
                <ul className="navbar-nav mx-auto">
                    <li className="navbar-brand">
                       Biblioteka
                    </li>
                    <li className="nav-item">
                        <Navlink to="/home" >Home</Navlink>  
                    </li>
                    <li className="nav-item">
                        <Navlink to="/" >Knjige</Navlink>  
                    </li>
                    <li className="nav-item">
                        <Navlink to="/" >Najpopularnije</Navlink>  
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                          Žanrovi
                        </a>
                        <div className="dropdown-menu" id="drop">
                            <span className="dropdown-item">Loading...</span>
                        </div>
                      </li>
                    <li className="nav-item dropdown">
                        <Dropdown />   
                    </li>
                    <li className="nav-item">
                        <Search />
                    </li>
                </ul>
            </nav>
        )
    }
}