import React, { Component } from 'react';
import Navlink from './navlink';
import { getBookByGenre} from '../../store/actions/index'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class DropdownGenres extends Component {

    render() {
        return (
            <ul> 
                {this.vratiZanrove()}
            </ul>
        )
    }

    vratiZanrove() {
        if(this.props.zanrovi.length ==0 ) {
            return <li>Loading..</li>
        }

        return this.props.zanrovi.map( zanr => {
            return (
                <li key={zanr.id} onClick={ () => this.props.vratiPoZanru(zanr.naziv) } > 
                    <Navlink to="/booklist" ><span className="dropdown-item" >{zanr.naziv}</span></Navlink>
                </li>
            )
        })
    }
}


function mapStateToProps(state) {
    return {
        zanrovi: state.genres
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        vratiPoZanru: getBookByGenre
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownGenres);