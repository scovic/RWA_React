import { GENRES_FETCH_DONE } from '../actions/types';

function showGenresReducer(state = [], action) {
    switch(action.type) {
        case GENRES_FETCH_DONE: {
            console.log('reducer za zanrove');
            return action.payload;
        }
        default:
            return state;
    }
}

export default showGenresReducer;