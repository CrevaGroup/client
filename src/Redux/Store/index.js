import {createStore} from 'redux';
import rootReducer from '../Reducer/index';
import thunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

export default store

