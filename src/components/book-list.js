import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookList extends Component {

    render() {
        return (
            <ul>
                {this.vratiListu()}
            </ul>
        )
    }

    vratiListu() { 
        
        console.log(this.props.booklist)
        if(this.props.booklist.length === 0) {
            return <li>Loading..</li>
        }
        
        return this.props.booklist.map(book => {
            
            return (
                <li key={book.id} className="prikazKnjige"> 
                    <p>{book.naslov} | {book.autor}</p>
                    <p>Žanr: {book.zanr}</p>
                    <p>Likes: {book.likes} | Dislikes: {book.dislikes}</p>
                    <p>Broj izdavanja knjige: {book.brojIzdavanja}</p>
                    <div className="btn-group">
                        <button className="btn btn-outline-success btn-sm">Like</button>
                        <button className="btn btn-outline-danger btn-sm">Dislike</button>
                        <button className="btn btn-outline-info btn-sm">Izdaj knjigu</button>
                        <button className="btn btn-outline-dark btn-sm">Ukloni</button>
                    </div>
                </li>
            )
        })
    }

}

function mapStateToProps(state) {
    return {
        booklist: state.booklist
    }
}



export default connect(mapStateToProps)(BookList)