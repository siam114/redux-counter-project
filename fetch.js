//constants 
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';

//state
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null,
};

//actions
const getTodosRequest = () =>{
    return {
        type: GET_TODOS_REQUEST,
    }
}

const getTodosSuccess = (todos) =>{
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos,
    }
}

const getTodosFailure = (error) =>{
    return {
        type: GET_TODOS_FAILURE,
        payload: error, 
    }
}


//reducer
const todosReducer = (state=initialTodosState , action) =>{
    switch(action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload,
            }

        case GET_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
    }
}
