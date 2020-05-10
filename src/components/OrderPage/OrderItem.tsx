import React, {FC} from "react";
import {TBook} from "../../redux/books-reducer";
import classes from "./Order.module.css"
import IconButton from "@material-ui/core/IconButton";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

type PropsType = {
    book: TBook
    removeCertainBooks: (id: number) => void
    addBook: (id: number) => void
    removeBook: (id: number) => void
}

export const OrderItem: FC<PropsType> = ({book, removeCertainBooks, removeBook, addBook}) => {
    return (
        <div className={classes.orderItem}>
            <div>
                <img src={book.image} alt=""/>
                <span> {book.count}</span>
            </div>
            <p>{book.bookName}</p>
            <div>
                <p>{book.price * book.count!} {book.currency}</p>
                <IconButton onClick={removeCertainBooks.bind(null, book.id)}>
                    <DeleteRoundedIcon/>
                </IconButton>
                <IconButton onClick={removeBook.bind(null, book.id)}>
                    <RemoveCircleIcon/>
                </IconButton>
                <IconButton onClick={addBook.bind(null, book.id)}>
                    <AddCircleOutlineRoundedIcon/>
                </IconButton>
            </div>
        </div>
    )
};