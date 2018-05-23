import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getGenres, addBook} from '../store/actions/index';


class FormaDodajKnjigu extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

        this.dodajKnjigu  = this.dodajKnjigu.bind(this);

    }

    componentWillMount() {
        this.props.vratiZanrove();
    }

    render() {
        return ( 
            <div className="forma form-group">
                <p><span className="labela">Naslov: </span> <input type='text' ref='_naslov'/></p>
                <p><span className="labela">Autor: </span> <input type='text' ref='_autor' /></p>    
                <p>
                    <span className="labela">Žanr:</span>
                    <select ref='_zanr' >
                        { this.props.zanrovi.map((zanr, index) => {
                            if( index == 0) {
                                return <option selected key={index} value={zanr.naziv}>{zanr.naziv}</option>
                            }

                            return <option value={zanr.naziv} key={index}>{zanr.naziv}</option>
                        })}
                    </select>
                </p>
                <button type='button' onClick={() => this.dodajKnjigu()}>Dodaj knjigu</button>
            </div>
        )
    }


    dodajKnjigu() {
        
            const detalji = {
                naslov: this.refs._naslov.value,
                autor: this.refs._autor.value,
                zanr: this.refs._zanr.value
            }
            
            this.props.addBook(detalji);
        
            this.ocistiUnos();
    }

    ocistiUnos() {
        this.refs._naslov.value= "";
        this.refs._autor.value= "";
        this.refs._zanr.value= "";
    }

}

function mapStateToProps(state) {
    return {
        zanrovi: state.genres
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        vratiZanrove: getGenres,
        addBook: addBook
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormaDodajKnjigu);