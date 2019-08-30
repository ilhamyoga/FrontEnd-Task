import { combineReducers } from 'redux';
import todos from './todos';
import category from './category';

const appReducers = combineReducers({
    todos,
    category
    //you can add more reducers here, separated by , !
});
export default appReducers;