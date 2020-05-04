import {InferActionsType, AppStateType} from "./store";
import {ThunkAction} from "redux-thunk";
import {getBooksApi} from "../API/apiImitation";

const initialState = {
    isFetching: true,
    books: null as null | Array<TBook>,
};

type ActionType = InferActionsType<typeof booksActions>

export const booksReducer = (state: typeof initialState = initialState, action: ActionType) => {
    switch (action.type) {
        case 'GET_BOOKS':
            return {
                ...state, books: [...action.books]
            };
        case 'TOGGLE_FETCHING':
            return {
                ...state, isFetching: action.isFetching
            };
        case 'ADD_BOOKS':
            return {
                ...state, books: [...state.books!, ...action.newBooks]
            };
        case "SORT_TO_LOWEST":
            return {...state, books: [...state.books!.sort((a, b) => a.price - b.price)]};
        case "SORT_TO_HIGHER":
            return {...state, books: [...state.books!.sort((a, b) => b.price - a.price)]};
        default:
            return {
                ...state
            }
    }
};

export type TBook = {
    bookName: string,
    id: number,
    image: string,
    author: string,
    price: number,
    currency: string,
    shortDescription: string
    count?: number
}

export const booksActions = {
    getBooks: (books: Array<TBook>) => ({
        type: 'GET_BOOKS',
        books
    } as const),
    toggleFetching: (isFetching: boolean) => ({
        type: 'TOGGLE_FETCHING',
        isFetching
    } as const),
    addBooks: (newBooks: Array<TBook>) => ({
        type: 'ADD_BOOKS',
        newBooks
    } as const),
    sortToLowestPrice: () => ({type: 'SORT_TO_LOWEST'} as const),
    sortToHigherPrice: () => ({type: 'SORT_TO_HIGHER'} as const)
};

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const thunkGetBooks = (): ThunkActionType => async (dispatch) => {
    let booksData = await getBooksApi();
    dispatch(booksActions.getBooks(booksData));
    dispatch(booksActions.toggleFetching(false));
};

export const thunkAddBooks = (): ThunkActionType => async (dispatch) => {
    dispatch(booksActions.toggleFetching(true));
    let booksData = await getBooksApi();
    dispatch(booksActions.addBooks(booksData));
    dispatch(booksActions.toggleFetching(false));
};