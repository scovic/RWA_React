import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getGenres} from '../store/actions/index';


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
                <p><span className="labela">Naslov: </span> <input type='text' /></p>
                <p><span className="labela">Autor: </span> <input type='text' /></p>
                <p><span className="labela">Žanr:</span></p>
                <p>
                    <select>
                        { this.props.zanrovi.map((zanr, index) => {
                            if( index == 0) {
                                return <option selected value={zanr.naziv}>{zanr.naziv}</option>
                            }

                            return <option value={zanr.naziv}>{zanr.naziv}</option>
                        })}
                    </select>
                </p>
                <button type='button' onClick={this.dodajKnjigu}>Dodaj knjigu</button>
            </div>
        )
    }


    dodajKnjigu() {
        //dodavanje knjige
        console.log("dodao knjigu");
    }

}

function mapStateToProps(state) {
    return {
        zanrovi: state.genres
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        vratiZanrove: getGenres
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormaDodajKnjigu);