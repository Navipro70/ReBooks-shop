import {InferActionsType, AppStateType} from "./store";
import {ThunkAction} from "redux-thunk";
import {getBooksApi} from "../API/apiImitation";

const initialState = {
    books: null as null | Array<TBook>,
};

type ActionType = InferActionsType<typeof booksActions>

export const booksReducer = (state: typeof initialState = initialState, action: ActionType) => {
    switch (action.type) {
        case 'GET_BOOKS':
            return {
                ...state, books: action.books
            };
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
}

export const booksActions = {
    getBooks: (books: Array<TBook>) => ({
        type: 'GET_BOOKS',
        books
    } as const)
};

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const thunkGetBooks = (): ThunkActionType => async (dispatch) => {
    let booksData = await getBooksApi();
    dispatch(booksActions.getBooks(booksData))
};