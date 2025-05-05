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