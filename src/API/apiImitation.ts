import {books} from "./serverData";
import {TBook} from "../redux/books-reducer";

export const getBooksApi = () => {
    let prom = new Promise<Array<TBook>>(resolve => {
        setTimeout(() => {
            resolve(books)
        }, 1500)
    }).then(books => books);
    return prom
};