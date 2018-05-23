import React, {Component} from 'react';
import { getBooksBySearch} from '../../store/actions/index';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';



class Search extends Component {
    

    constructor(props)  {
        super(props);
        this.state = {
            redirect: false
        }
        this.search = this.search.bind(this);
        
    }

    render() {
        return (
            <div>
            <input className="form-control mr-sm-2" onInput={() => this.search()} ref='_search' type="text" placeholder="Search.." />
            {this.redirect()}
            </div>
        )
    }

    search() {
       setTimeout( () =>this.props.searchBooks(this.refs._search.value), 700);  
       this.setState({redirect: true})
       // kako da odradim sa rxjs observable???  
    }

    redirect() {
        if(this.state.redirect) {
            return <Redirect to='/booklist' />
        }
        else {
            return <Redirect to='/' />
        }
        
       
    }
}


function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        searchBooks: getBooksBySearch
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);




