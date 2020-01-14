import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import axios from 'axios';

import rootReducer from '../redux/rootReducer';
import logic from '../redux/rootLogic';
import environmentConfig from './environmentConfig';


const deps = { // injected dependencies for logic
    httpClient: axios,
    environmentConfig
};

const logicMiddleware = createLogicMiddleware(logic, deps);

const middleware = applyMiddleware(
    logicMiddleware
);


const enhancer = middleware;

export default function configureStore() {
    return createStore(rootReducer, enhancer);
}
