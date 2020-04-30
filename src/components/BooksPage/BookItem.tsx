import React, {FC} from "react";
import classes from "./Books.module.css";
import {TBook} from "../../redux/books-reducer";
import {Button} from "@material-ui/core";

export const BookItem: FC<TBook> = ({author, id, image, price, bookName, currency, shortDescription}) => {
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
                <Button variant="contained" color="primary">Add to cart</Button>
            </div>
        </ div>
    )
};