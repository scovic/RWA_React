import { combineReducers } from 'redux';
import showBooksReducer from './book-list.reducer';
import showGenresReducer from './genre-list.reducer'
import booklist from '../../components/book-list'

const rootReducer = combineReducers({
    booklist: showBooksReducer,
    genres: showGenresReducer
});


export default rootReducer;