import { takeLatest, takeEvery } from 'redux-saga/effects';
import { call, put, all, fork} from 'redux-saga/effects';
import { BOOKS_FETCH_REQUESTED, BOOKS_FETCH_DONE, 
        GENRES_FETCH_DONE, GENRES_FETCH_REQUESTED , FETCH_BOOKS_BY_GENRE, 
         FETCH_MOST_POPULAR_BOOKS_REQ, FETCH_MOST_POPULAR_BOOKS_DONE
        ,FETCH_SEARCHED_BOOKS, FETCH_SEARCHED_BOOKS_DONE} from '../store/actions/types';
import {getBooks} from '../services/books.service';
import { getGenres} from '../services/zanr.service';
import request from 'superagent';

function getBooks2() {
    console.log("uso u getbooks2, ovde zovi api")
    const url = "http://localhost:3000/knjige/";
    return request
           .get(url)
           .then((data)=>{
               return JSON.parse(data.text);
           })
}



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


export default function* root() {
    yield [
        fork(getBooksSaga),
        fork(getGenresSaga),
        fork(getMostPopularBooksSaga),
        fork(searchBooksSaga)
    ]
}