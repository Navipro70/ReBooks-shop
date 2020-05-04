import React, {FC} from "react";
import classes from "./Books.module.css";
import {TBook} from "../../redux/books-reducer";
import {Button} from "@material-ui/core";

type PropsType = {
    book: TBook
    addBookToOrder: (book: TBook) => void
}

export const BookItem: FC<PropsType> = ({book, addBookToOrder}) => {
    const {author, image, price, bookName, currency, shortDescription} = book;
    const addToCartHandler = () => {
        addBookToOrder({...book, count: 1})
    };
    return (
        <div className={classes.books}>
            <div className={classes.image}>
                <img src={image} alt="Nothing:)"/>
            </div>
            <div className={classes.information}>
                <h4>Name: {bookName}</h4>
                <h5>Author: {author}</h5>
                <h4>Price: {`${price} ${currency}`}</h4>
                <div>
                    <p>Short description: {`${shortDescription.slice(0, 300)}...`}</p>
                </div>
                <Button variant="contained" color="primary" onClick={addToCartHandler}>
                    Add to cart
                </Button>
            </div>
        </ div>
    )
};