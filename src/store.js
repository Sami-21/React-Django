import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer, initialState } from "./reducer";

const reducer = combineReducers({
    cart:cartReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer ,initialState, composeEnhancer(applyMiddleware(thunk)))

export default store