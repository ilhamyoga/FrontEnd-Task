import { combineReducers } from 'redux';
import todos from './todos';

const appReducers = combineReducers({
    todos,
    //you can add more reducers here, separated by , !
});
export default appReducers;