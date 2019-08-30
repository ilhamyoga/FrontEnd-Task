import { put, takeLatest, all } from 'redux-saga/effects';
import * as actions from '../actions/ActionTypes'

function* getTodosItem() {
    try {
        const json = yield fetch('https://my-json-server.typicode.com/ilhamyoga/fake-api/todos').then(response => response.json(), );
        yield put({ type: actions.GET_TODOS_SUCCESS, response: json })
    } catch (error) {
        yield put({ type: actions.GET_TODOS_ERROR, error })
    }
}
function* actionWatcherTodos() {
     yield takeLatest(actions.GET_TODOS_REQUEST, getTodosItem)
}

function* getCategoriesItem() {
    try {
        const json = yield fetch('https://my-json-server.typicode.com/ilhamyoga/fake-api/categories').then(response => response.json(), );
        console.log("todoSaga", json)
        yield put({ type: actions.GET_CATEGORY_SUCCESS, response: json })
    } catch (error) {
        yield put({ type: actions.GET_CATEGORY_ERROR, error })
    }
}
function* actionWatcherCategories() {
     yield takeLatest(actions.GET_CATEGORY_REQUEST, getCategoriesItem)
}

function* getTodosAddItem(action) {
    try {
        const json = yield fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers : new Headers(),
            body: JSON.stringify(action.payload)
        }).then(response => response.json(), );
        yield put({ type: actions.POST_TODOS_SUCCESS, response: json })
    } catch (error) {
        yield put({ type: actions.POST_TODOS_ERROR, error })
    }
}
function* actionWatcherAddTodos() {
     yield takeLatest(actions.POST_TODOS, getTodosAddItem)
}

function* getTodosDeleteItem(action) {
    try {
        const json = yield fetch('https://jsonplaceholder.typicode.com/posts/'+action.key, {
            method: 'DELETE',
        }).then(response => response.json(), );
        yield put({ type: actions.DELETE_TODOS_SUCCESS, response: json })
    } catch (error) {
        yield put({ type: actions.DELETE_TODOS_ERROR, error })
    }
}
function* actionWatcherDeleteTodos() {
     yield takeLatest(actions.DELETE_TODOS, getTodosDeleteItem)
}


export default function* rootSaga() {
   yield all([
    actionWatcherTodos(),
    actionWatcherAddTodos(),
    actionWatcherDeleteTodos(),
    actionWatcherCategories(),
   ]);
}