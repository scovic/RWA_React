import { BOOKS_FETCH_REQUESTED, GENRES_FETCH_REQUESTED } from './types';
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

