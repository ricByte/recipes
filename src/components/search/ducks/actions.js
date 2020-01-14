
// unique key namespace used by combineReducers.
// By convention it will match the directory structure to
// make it easy to locate the src.
// Also action types will prefix with the capitalized version
export const key = 'search';

// action type constants
export const SEARCH = 'SEARCH';
export const SEARCH_FULFILLED = 'SEARCH_FULFILLED';
export const SEARCH_REJECTED = 'SEARCH_REJECTED';

export const actionTypes = {
  SEARCH,
  SEARCH_FULFILLED,
  SEARCH_REJECTED
};

// action creators
export const search = ev => ({
    type: SEARCH,
    payload: {
        value: ev.value,
        page: ev.page,
        pageSize: ev.pageSize
    }
});
export const searchFulfilled = (recipes) => {
    return ({
        type: SEARCH_FULFILLED,
        payload: recipes
    });
};
export const searchRejected = (err) => ({
  type: SEARCH_REJECTED,
  payload: err,
  error: true
});

export const actions = {
  search,
  searchFulfilled,
  searchRejected
};
