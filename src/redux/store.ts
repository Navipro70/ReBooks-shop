// import {applyMiddleware, createStore} from "redux";
// import {thunkMiddleware} from "redux-thunk"

// let reducers = combineReducers({
//
// });

// type ReducersType = typeof reducers

// export type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
//
// export type InferActionsType<T extends { [key: string]: (...args: any) => any }> = ReturnType<PropertiesType<T>>

// export type AppStateType = ReturnType<ReducersType>

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
// window.store = store;
//
// export default store