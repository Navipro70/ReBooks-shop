import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {booksReducer} from "./books-reducer";
import {orderReducer} from "./order-reducer";
import {cartReducer} from "./cart-reducer";

let reducers = combineReducers({
    booksPage: booksReducer,
    orderPage: orderReducer,
    cartPage: cartReducer
});

type ReducersType = typeof reducers

export type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsType<T extends { [key: string]: (...args: any) => any }> = ReturnType<PropertiesType<T>>

export type AppStateType = ReturnType<ReducersType>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store