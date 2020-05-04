import {TBook} from "./books-reducer";
import {InferActionsType} from "./store";

const initialState = {
    booksInOrder: [] as [] | Array<TBook>,
    commonPrice: 0,
    totalCount: 0
};

type TState = typeof initialState

type ActionType = InferActionsType<typeof orderActions>

const booksCountReduce = (acc: number, item: TBook) => item.count! + acc;
const booksPriceReduce = (acc: number, item: TBook) => item.count! * item.price + acc;

const updateBooksInOrder = (state: TState, book: TBook): TState => {
    const findIndex = state.booksInOrder.findIndex(i => i.id === book.id);
    if (findIndex < 0) return {
        ...state,
        booksInOrder: [...state.booksInOrder, book],
        totalCount: [...state.booksInOrder, book].reduce(booksCountReduce, 0),
        commonPrice: [...state.booksInOrder, book].reduce(booksPriceReduce, 0)
    };
    else {
        const newBooksInOrder = [...state.booksInOrder];
        newBooksInOrder[findIndex].count! += book.count!;
        return {
            ...state, booksInOrder: newBooksInOrder,
            totalCount: newBooksInOrder.reduce(booksCountReduce, 0),
            commonPrice: newBooksInOrder.reduce(booksPriceReduce, 0)
        }
    }
};

export const orderReducer = (state: TState = initialState, action: ActionType): TState => {
    switch (action.type) {
        case "ADD_BOOK_TO_ORDER":
            return updateBooksInOrder(state, action.book);
        case "REMOVE_CERTAIN_BOOKS_FROM_ORDER":
            const changedBooksInOrder = state.booksInOrder.filter(book => book.id !== action.id);
            return {
                ...state,
                booksInOrder: changedBooksInOrder,
                totalCount: changedBooksInOrder.reduce(booksCountReduce, 0),
                commonPrice: changedBooksInOrder.reduce(booksPriceReduce, 0)
            };
        case "REMOVE_ONE_BOOK_FROM_ORDER":
            const booksWithoutOne = (state.booksInOrder as Array<TBook>).map((book) => {
                if (book.id === action.id) book.count! -= 1;
                return book
            }).filter(item => item.count !== 0);
            return {
                ...state,
                booksInOrder: booksWithoutOne,
                totalCount: booksWithoutOne.reduce(booksCountReduce, 0),
                commonPrice: booksWithoutOne.reduce(booksPriceReduce, 0)
            };
        default:
            return {
                ...state
            }
    }
};

export const orderActions = {
    addBookToOrder: (book: TBook) => ({
        type: 'ADD_BOOK_TO_ORDER',
        book,
    } as const),
    removeCertainBooksFromOrder: (id: number) => ({
        type: 'REMOVE_CERTAIN_BOOKS_FROM_ORDER',
        id
    } as const),
    removeOneBookFromOrder: (id: number) => ({
        type: 'REMOVE_ONE_BOOK_FROM_ORDER',
        id
    } as const),
    addOneBookToOrder: (id: number) => ({
        type: 'ADD_ONE_BOOK_TO_ORDER',
        id
    } as const)
};