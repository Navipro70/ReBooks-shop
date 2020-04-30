import React, {ComponentType, FC, useEffect} from "react";
import classes from "./Books.module.css";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {TBook, thunkGetBooks} from "../../redux/books-reducer";
import {compose} from "redux";
import {BookItem} from "./BookItem";
import {Preloader} from "../CommonComponents/Preloader";
import {Button} from "@material-ui/core";

type MapStatePropsType = {
    books: Array<TBook> | null
}

type MapDispatchPropsType = {
    thunkGetBooks: () => void
}

type PropsType = MapDispatchPropsType & MapStatePropsType

const BooksPage: FC<PropsType> = ({books, thunkGetBooks}) => {
    useEffect(() => {
        thunkGetBooks()
    }, [thunkGetBooks]);
    if (books === null) return <Preloader/>;
    return (
        <div>
            {books.map(book => <BookItem key={book.id}
                                         id={book.id}
                                         author={book.author}
                                         bookName={book.bookName}
                                         currency={book.currency}
                                         image={book.image}
                                         price={book.price}
                                         shortDescription={book.shortDescription}
            />)}
            <div className={classes.showMore}>
                <Button variant="contained" color="secondary">Show more</Button>
            </div>
        </div>
    )
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    books: state.booksPage.books
});

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>(mapStateToProps, {
        thunkGetBooks
    })
)(BooksPage);