import { GENRES_FETCH_DONE, ADD_GENRE_DONE } from '../actions/types';

function showGenresReducer(state = [], action) {
    switch(action.type) {
        case GENRES_FETCH_DONE: {
            console.log('reducer za zanrove');
            return action.payload;
        }
        case ADD_GENRE_DONE: {
            return action.payload;
        }
        default:
            return state;
    }
}

export default showGenresReducer;