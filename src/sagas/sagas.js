import { takeLatest, takeEvery } from 'redux-saga/effects';
import { call, put, all, fork} from 'redux-saga/effects';

import { BOOKS_FETCH_REQUESTED, BOOKS_FETCH_DONE, 
        GENRES_FETCH_DONE, GENRES_FETCH_REQUESTED , FETCH_BOOKS_BY_GENRE, 
         FETCH_MOST_POPULAR_BOOKS_REQ, FETCH_MOST_POPULAR_BOOKS_DONE
        ,FETCH_SEARCHED_BOOKS, FETCH_SEARCHED_BOOKS_DONE,
        ADD_BOOK_DONE, ADD_BOOK_REQ,
        ADD_GENRE_DONE, ADD_GENRE_REQ, 
        DELETE_REQ,
        UPDATE_REQ} from '../store/actions/types';


import {getBooks, getBooksById, addBook, deleteBook, updateBook} from '../services/books.service';
import { getGenres, addGenre} from '../services/zanr.service';



function* callGetBooks({zanr=null}) {
    console.log("Uso u call")
    const books = yield call(getBooks);
    console.log("Books in saga: " + books);
    if(zanr===null) {
        yield put({type: BOOKS_FETCH_DONE,  payload: books });
    }
    else {        
        yield put({type: FETCH_BOOKS_BY_GENRE, payload: books, zanr: zanr});
    }
}
function* getBooksSaga() {
    console.log("uso u getBooksSaga, treba da okine akciju")
    yield takeLatest(BOOKS_FETCH_REQUESTED, callGetBooks);
    
}




function* callGetGenres({resolve, reject}) {
    console.log("uso u call getgenre");
    const genres = yield call(getGenres);
    yield put({type: GENRES_FETCH_DONE, payload: genres})
}

function* getGenresSaga() {
    console.log("uso u getGEnresSAga");
    yield takeLatest(GENRES_FETCH_REQUESTED, callGetGenres);
}




function* callgetMostPopularBooks() {
    const books = yield call(getBooks);
    yield put({ type: FETCH_MOST_POPULAR_BOOKS_DONE, payload: books});
}

function* getMostPopularBooksSaga() {
    console.log("uso u getMostPopularBooksSaga");
    yield takeLatest(FETCH_MOST_POPULAR_BOOKS_REQ, callgetMostPopularBooks )
}



function* callSearchBooks({payload}) {
    const books = yield call(getBooks);
    yield put({ type: FETCH_SEARCHED_BOOKS_DONE , pattern: payload, books: books});
}

function* searchBooksSaga() {

    console.log("uso u searchBookSaga");
    yield takeLatest(FETCH_SEARCHED_BOOKS, callSearchBooks );
}



function* callAddBook({ payload }) {
    const books = yield call(getBooks);
    let newId = 0;

    books.forEach((book) => {
        if(book.id > newId) {
            newId = book.id;
        }

    });

    newId +=1;

    const newBook = {
        "id" : newId,
        "naslov": payload.naslov,
        "autor": payload.autor,
        "zanr": payload.zanr,
        "likes" : 0,
        "dislikes" : 0,
        "brojIzdavanja":0
    }
    yield call(addBook, newBook);
    const updatedBooks = [...books, newBook];
    yield put({type: ADD_BOOK_DONE, payload: updatedBooks});
}

function* addBookSaga() {
    console.log("uso u addBookSaga");
    yield takeLatest(ADD_BOOK_REQ, callAddBook);
}



function* callAddGenre({ payload }) {
    const genres = yield call(getGenres);
    let newId = 0;
    genres.forEach((genre) => {
        if(genre.id > newId) {
            newId = genre.id;
        }
    });

    newId += 1;
     const newGenre = {
         "id": newId,
         "naziv": payload
     }
     yield call(addGenre, newGenre);
     const updatedGenreList = [...genres, newGenre];
     yield  put({ type: ADD_GENRE_DONE , payload: updatedGenreList})
}

function* addGenreSaga() {
    console.log("uso u addGenreSaga");
    yield takeLatest(ADD_GENRE_REQ, callAddGenre);
}


function* callDeleteBook({payload}) {
    console.log("uso u callDeleteBook");
    yield call(deleteBook, payload);

    const books = yield call(getBooks);

    yield put({type: BOOKS_FETCH_DONE, payload: books});
}

function* deleteBookSaga() {
    console.log("uso u deleteBookSaga");
    yield takeEvery(DELETE_REQ, callDeleteBook);
}



function* callUpdateBook({payload}) {
    const book = yield call(getBooksById, payload.id);

    if(payload.key === "like") {
        book.likes += 1;
    } else if (payload.key === "dislike") {
        book.dislikes += 1;
    } else if( payload.key === "izdavanje") {
        book.brojIzdavanja += 1;
    }

    yield call(updateBook, book, book.id);

    const books = yield call(getBooks);

    yield put({type: BOOKS_FETCH_DONE, payload: books});
}

function* updateBookSaga() {
    console.log("uso u updateBookSaga");
    yield takeEvery(UPDATE_REQ, callUpdateBook);
}

export default function* root() {
    yield [
        fork(getBooksSaga),
        fork(getGenresSaga),
        fork(getMostPopularBooksSaga),
        fork(searchBooksSaga),
        fork(addBookSaga),
        fork(addGenreSaga),
        fork(deleteBookSaga),
        fork(updateBookSaga)
    ]
}