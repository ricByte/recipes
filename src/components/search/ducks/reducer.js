import {key, SEARCH, SEARCH_FULFILLED, SEARCH_REJECTED} from './actions';

export const selectors = {
    results: state => state[key].list,
    fetchStatus: state => state[key].fetchStatus,
    pages: state => ({
        currentPage: state[key].currentPage,
        size: state[key].size,
        value: state[key].value,
    })
};

const initialState = {
    list: [],
    fetchStatus: '',
    currentPage: 1,
    size: 5,
    value: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                fetchStatus: `fetching for ${action.payload}... ${(new Date()).toLocaleString()}`,
                list: [],
            };
        case SEARCH_FULFILLED:
            return {
                ...state,
                list: action.payload,
                fetchStatus: `Results from ${(new Date()).toLocaleString()}`,
                currentPage: action.payload.currentPage,
                size: action.payload.totalPages,
                value: action.payload.value
            };
        case SEARCH_REJECTED:
            return {
                ...state,
                fetchStatus: `errored: ${action.payload}`
            };
        default:
            return state;
    }
}
