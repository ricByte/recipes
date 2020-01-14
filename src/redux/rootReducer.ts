import { combineReducers } from 'redux';
import { key as searchKey, reducer as searchReducer } from '../components/search';


export default combineReducers({
    [searchKey]: searchReducer,
});
