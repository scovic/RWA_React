import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import {updateBook, deleteBook } from '../store/actions/index';



class BookList extends Component {

    constructor(props) {
        super(props);
        this.like = this.like.bind(this);
        this.dislike = this.dislike.bind(this);
        this.izdajKnjigu = this.izdajKnjigu.bind(this);
        this.ukloni = this.ukloni.bind(this);
    }


    render() {
        return (
            <ul>
                {this.vratiListu()}
            </ul>
        )
    }

    vratiListu() { 
        
        if( this.props.booklist === null) {
            return <h4>Nema knjiga</h4>
        }

        console.log(this.props.booklist)
        if(this.props.booklist.length === 0) {
            return <li>Loading..</li>
        }
        
        return this.props.booklist.map(book => {
            
            return (
                <li key={book.id} className="prikazKnjige" > 
                    <input type='hidden' value={book.id} ref="_id" />
                    <p>{book.naslov} | {book.autor}</p>
                    <p>Žanr: {book.zanr}</p>
                    <p>Likes: {book.likes} | Dislikes: {book.dislikes}</p>
                    <p>Broj izdavanja knjige: {book.brojIzdavanja}</p>
                    <div className="btn-group">
                        <button className="btn btn-outline-success btn-sm" onClick={() => this.props.azurirajKnjigu(book.id, "like") }>
                            Like
                        </button>
                        <button className="btn btn-outline-danger btn-sm" onClick={() => this.props.azurirajKnjigu(book.id, "dislike") }>
                            Dislike 
                        </button>
                        <button className="btn btn-outline-info btn-sm" onClick={() => this.props.azurirajKnjigu(book.id, "izdavanje") }>
                            Izdaj knjigu
                        </button>
                        <button className="btn btn-outline-dark btn-sm" onClick={() => this.props.obrisiKnjigu(book.id) }>
                            Ukloni
                        </button>
                    </div>
                </li>
            )
        })
    }

    like() {
        console.log("lajkovao");
    }

    dislike() {
        console.log("dislajkovao");
    }

    izdajKnjigu() {
        console.log("izdao");
    }

    ukloni() {
        
    }

}

function mapStateToProps(state) {
    return {
        booklist: state.booklist
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        obrisiKnjigu: deleteBook,
        azurirajKnjigu: updateBook
    }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(BookList)