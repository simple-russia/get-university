import { combineReducers } from 'redux';
import { getUniReducer } from './reducers/getUniReducer';


const rootReducer = combineReducers({
    requestedUnivercities: getUniReducer,
});

type rootReducerType = ReturnType<typeof rootReducer>;

export { rootReducer, rootReducerType };
