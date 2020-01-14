import { createLogic } from 'redux-logic';
import {DELETE, SEARCH, searchFulfilled, searchRejected} from './ducks/actions';
import {selectors} from "./ducks/reducer";

export const searchLogic = createLogic({
  type: SEARCH,
  debounce: 500, /* ms */
  latest: true,  /* take latest only */

  /* let's prevent empty requests */
  validate({ getState, action }, allow, reject) {
    if (action.payload) {
      allow(action);
    } else {  /* empty request, silently reject */
      reject();
    }
  },

  // use axios injected as httpClient from configureStore logic deps
  process({ httpClient, getState, action, environmentConfig }, dispatch, done) {
      const state = selectors.pages(getState());
    httpClient.get(`${environmentConfig.BASE_URL}/recipes?page=${action.payload.page||state.currentPage}&pageSize=${action.payload.pageSize||state.size}&search=${action.payload.value||state.value}`)
      .then(resp => {
          return resp.data;
      }) // use results property of payload
      .then(results => dispatch(searchFulfilled({...results, value: action.payload.value})))
      .catch((err) => {
        console.error(err); // might be a render err
        dispatch(searchRejected(err))
      })
      .then(() => done()); // call done when finished dispatching
  }
});

export const deleteLogic = createLogic({
    type: DELETE,
    debounce: 500, /* ms */
    latest: true,  /* take latest only */

    /* let's prevent empty requests */
    validate({ getState, action }, allow, reject) {
        if (action.payload) {
            allow(action);
        } else {  /* empty request, silently reject */
            reject();
        }
    },

    // use axios injected as httpClient from configureStore logic deps
    async process({ httpClient, getState, action, environmentConfig }, dispatch, done) {
        const state = selectors.pages(getState());
        httpClient.get(`${environmentConfig.BASE_URL}/recipes/${action.payload.value}`)
            .then(resp => {
                return resp.data;
            }) // use results property of payload
            .then(results => dispatch(searchFulfilled({...results, value: action.payload.value})))
            .catch((err) => {
                console.error(err); // might be a render err
                dispatch(searchRejected(err))
            })
            .then(() => done()); // call done when finished dispatching
    }
});

export default [
  searchLogic
];
