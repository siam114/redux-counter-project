const {createStore} = require('redux');

// defining const
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

//state
const initialCounterState = {
    count: 0,
};

const initialUserState = {
    users: [{name: 'Siam'}],
};

//action - object -type and payload
const incrementCounter = () =>{
    return {
        type: INCREMENT,
    };
}

const decrementCounter = () =>{
    return {
        type: DECREMENT,
    };
}

// const addUser = (user) =>{
//     return {
//         type: ADD_USER,
//         payload: user,
//     };
// }

//reducer - pure function - takes state and action and returns new state
const counderReducer = (state = initialCounterState, action) =>{

    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
    }
}

//create store - takes reducer and returns store
const store = createStore(counderReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

//dispatch action - call the action and pass it to the store
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
