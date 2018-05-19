import React, { Component } from 'react';
import Navlink from './navlink';

export default class Dropdown extends Component {

    render() {
        return (
            <div>
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    Dodavanje
                </a>
                <div className="dropdown-menu">
                    {/*}<Navlink to='/DodajKnjigu'><span >Dodaj knjigu</span></Navlink>
                        <Navlink to='/DodajZanr'><span >Dodaj žanr</span></Navlink> */}
                        <a className="dropdown-item" href="#" id="dodaj-knjigu">Knjiga</a>
                        <a className="dropdown-item" href="#" id="dodaj-zanr">Žanr</a>
                </div>
            </div>
        )
    }
}
