import { BOOKS_FETCH_DONE, FETCH_BOOKS_BY_GENRE, FETCH_MOST_POPULAR_BOOKS_DONE
        , FETCH_SEARCHED_BOOKS_DONE, ADD_BOOK_DONE} from '../actions/types';


function showBooksReducer(state = [], action) {
    switch(action.type) {
        case BOOKS_FETCH_DONE: {
            console.log("reducer za books_fetch_done")
            return action.payload;
        }
        case FETCH_BOOKS_BY_GENRE: {
            let books = action.payload;
            let filteredBooks =  books.filter((book) => {
                if(book.zanr == action.zanr) {
                    return book;
                }
            }); 

            if(filteredBooks.length === 0) {
                filteredBooks = null
            }

            return filteredBooks;
        }
        case FETCH_MOST_POPULAR_BOOKS_DONE: {
            let books = action.payload;
            let popularBooks = books.filter((book) => {
                if( book.brojIzdavanja > 100) {
                    return book;
                }
            });

            return popularBooks;
        }
        case FETCH_SEARCHED_BOOKS_DONE: {
            let books = action.books;
            let searchResult = books.filter( (knjiga) => {
                if(RegExp(action.pattern.toLowerCase()).test(knjiga.naslov.toLowerCase()) || 
                    RegExp(action.pattern.toLowerCase()).test(knjiga.autor.toLowerCase())) {
                        return knjiga;
                    }
            });
            

            if(searchResult.length === 0) 
                return books;
            return searchResult;
        }
        case ADD_BOOK_DONE: {
            return action.payload;
        }
        default:
            return state;
    }
}
export default showBooksReducer;