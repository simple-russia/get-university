import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
type AppDispatch = typeof store.dispatch;

export { store, AppDispatch };
