import { combineReducers } from 'redux';
import { getUniReducer } from './reducers/getUniReducer';


const rootReducer = combineReducers({
    requestedUnivercities: getUniReducer,
});

export { rootReducer };
