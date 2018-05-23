import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addGenre}  from '../store/actions/index';

class FormaDodajZanr extends Component {

    constructor(props) {
        super(props);

        this.dodajZanr = this.dodajZanr.bind(this);
    }


    render() {
        return (
            <div className="forma form-group">
                <p><span className="labela">Naziv žanra: </span>  <input type="text" ref="_zanr" /></p>
                <p><button type='button' onClick={this.dodajZanr}>Dodaj žanr</button></p>
            </div>
        )
    }

    dodajZanr() {
        
        this.props.addGenre(this.refs._zanr.value);
        this.refs._zanr.value = "";
    }


}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addGenre: addGenre
    }, dispatch)
}


export default connect(null, mapDispatchToProps)(FormaDodajZanr);