const {createStore, combineReducers} = require('redux');

//constant products
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

//constant cart
const GET_CART = 'GET_CART';
const ADD_CART = 'ADD_CART';

//state products
const initialProductState = {
    products: ['sugar'],
    numberofProducts: 1,
};

//state cart
const initialCartState = {
    cart: [],
    numberofProducts: 0,
};

//action products
const getProducts = () =>{
  return {
    type: GET_PRODUCTS,
  };
}

const addProduct = (product) =>{
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
}


//action cart
const getCart = () =>{
    return {
        type: GET_CART,
    };
}

const addCart = (cart) =>{
    return {
        type: ADD_CART,
        payload: cart,
    };
}

//productReducer
const productReducer = (state=initialProductState, action) =>{
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
            };

        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                numberofProducts: state.numberofProducts + 1,
            };

        default:
            return state;
    }
}


//cartReducer
const cartReducer = (state=initialCartState, action)=>{
    switch(action.type){
        case GET_CART:
            return {
                ...state,
            }

        case ADD_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
                numberofProducts: state.numberofProducts + 1,
            }
        
        default:
            return state;
    }
}

// combine reducers
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer,
})

//store 
const store = createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState());
})

// dispatch
store.dispatch(getProducts());
store.dispatch(addProduct('milk'));

store.dispatch(getCart());
store.dispatch(addCart('pen'));