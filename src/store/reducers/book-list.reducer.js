import { BOOKS_FETCH_DONE, FETCH_BOOKS_BY_GENRE } from '../actions/types';


function showBooksReducer(state = [], action) {
    switch(action.type) {
        case BOOKS_FETCH_DONE: {
            console.log("reducer za books_fetch_done")
            return action.payload;
        }
        case FETCH_BOOKS_BY_GENRE: {
            return action.payload;
        }
        default:
            return state;
    }
}
export default showBooksReducer;