import React, { Component } from 'react';
import Navlink from './navlink';
import Search from './search';
import { BOOKS_FETCH_REQUESTED } from '../../store/actions/types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  getBooklist , getGenres} from '../../store/actions/index';
import DropdownGenres from './dropdown-genres';


class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark" >
                <ul className="navbar-nav mx-auto">
                    <li className="navbar-brand">
                       Biblioteka
                    </li>
                    <li className="nav-item">
                        <Navlink to="/" >Home</Navlink>  
                    </li>
                    <li className="nav-item">
                        <span  onClick={() => this.props.vratiListu()  } ><Navlink to="/booklist" >Knjige</Navlink></span> 
                    </li>
                    <li className="nav-item">
                        <Navlink to="/" >Najpopularnije</Navlink>  
                    </li>
                    <li className="nav-item dropdown" onClick={ () => this.props.vratiZanrove()}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                          Žanrovi
                        </a>
                        <div className="dropdown-menu" >
                           <DropdownGenres />
                        </div>
                      </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                            Dodavanje
                        </a>
                        <div className="dropdown-menu">
                            <Navlink to='/DodajKnjigu' ><span className="dropdown-item crna-slova">Dodaj knjigu</span></Navlink>
                            <Navlink to='/DodajZanr' ><span className="dropdown-item crna-slova">Dodaj žanr</span></Navlink> 
                        </div>
                    </li>
                    <li className="nav-item">
                        <Search />
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        zanrovi: state.genres
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        vratiListu: getBooklist,
        vratiZanrove: getGenres
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)