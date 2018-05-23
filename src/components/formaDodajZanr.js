import React, { Component } from 'react';


export default class FormaDodajZanr extends Component {

    render() {
        return (
            <div className="forma form-group">
                <p><span className="labela">Naziv žanra: </span>  <input type="text" /></p>
                <p><button type='button' onClick={this.dodajZanr}>Dodaj žanr</button></p>
            </div>
        )
    }

    dodajZanr() {
        //logika za dodavanje zanra
        console.log("doda zanr");
    }


}