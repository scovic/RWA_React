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
                <li key={book.id}> 
                    {book.naslov}
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