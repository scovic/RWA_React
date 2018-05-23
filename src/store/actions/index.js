import { BOOKS_FETCH_REQUESTED, GENRES_FETCH_REQUESTED, FETCH_MOST_POPULAR_BOOKS_REQ 
        ,FETCH_SEARCHED_BOOKS } from './types';
import booklist from '../../components/book-list';


export function getBooklist() {
    console.log("Usao u getBooklist");
    return {
        type: BOOKS_FETCH_REQUESTED
    }
}


export function getGenres() {
    console.log("usao u getGenres");
    return {
        type: GENRES_FETCH_REQUESTED
    }
}


export function getBookByGenre(genre) {
    console.log("uso u getBookByGenre")
    return {
        type: BOOKS_FETCH_REQUESTED,
        zanr: genre
    }
}

export function getMostPopularBooks() {
    console.log("uso u getMostPopularBooks");
    return {
        type: FETCH_MOST_POPULAR_BOOKS_REQ
    }
}

export function getBooksBySearch(pattern) {
    console.log("uso u getBooksBySearch");
    return {
        type: FETCH_SEARCHED_BOOKS,
        payload: pattern
    }
}

