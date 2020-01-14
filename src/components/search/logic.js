import { createLogic } from 'redux-logic';
import { SEARCH, searchFulfilled, searchRejected } from './ducks/actions';

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
    httpClient.get(`${environmentConfig.BASE_URL}/recipes?page=${action.payload.page||1}&pageSize=${action.payload.pageSize||5}&search=${action.payload.value||''}`)
      .then(resp => {
          return resp.data;
      }) // use results property of payload
      .then(results => dispatch(searchFulfilled(results)))
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
