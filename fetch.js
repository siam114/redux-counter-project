const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk");


// constants 
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// initial state
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null,
};

// action creators
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST,
    };
};

const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos,
    };
};

const getTodosFailure = (error) => {
    return {
        type: GET_TODOS_FAILURE,
        payload: error,
    };
};

// reducer
const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload,
            };
        case GET_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

// async action creator (thunk)
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios
            .get(API_URL)
            .then((res) => {
                const todos = res.data;
                dispatch(getTodosSuccess(todos));
            })
            .catch((error) => {
                dispatch(getTodosFailure(error.message));
            });
    };
};

// store creation with middleware
const store = createStore(todosReducer, applyMiddleware(thunk));

// subscribe to store
store.subscribe(() => {
    console.log(store.getState());
});

// dispatch async action
store.dispatch(fetchData());
