import { put, takeLatest, all } from 'redux-saga/effects';
import * as actions from '../actions/ActionTypes'

function* getTodosItem() {
    try {
        const json = yield fetch('https://my-json-server.typicode.com/ilhamyoga/fake-api/todos').then(response => response.json(), );
        console.log("todoSaga", json)
        yield put({ type: actions.GET_TODOS_SUCCESS, response: json })
    } catch (error) {
        yield put({ type: actions.GET_TODOS_ERROR, error })
    }
}
function* actionWatcher() {
     yield takeLatest(actions.GET_TODOS_REQUEST, getTodosItem)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}