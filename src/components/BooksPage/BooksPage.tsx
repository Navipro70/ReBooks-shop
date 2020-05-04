import React, {ComponentType, FC, useEffect} from "react";
import classes from "./Books.module.css";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {booksActions, TBook, thunkAddBooks, thunkGetBooks} from "../../redux/books-reducer";
import {compose} from "redux";
import {BookItem} from "./BookItem";
import {Preloader} from "../CommonComponents/Preloader";
import {Button} from "@material-ui/core";
import {Sort} from "../CommonComponents/Sort";
import {orderActions} from "../../redux/order-reducer";

type MapStatePropsType = {
    books: Array<TBook> | null
    isFetching: boolean
}

type MapDispatchPropsType = {
    thunkGetBooks: () => void
    thunkAddBooks: () => void
    sortToLowestPrice: () => void
    sortToHigherPrice: () => void
    addBookToOrder: (book: TBook) => void
}

type PropsType = MapDispatchPropsType & MapStatePropsType

const BooksPage: FC<PropsType> = ({books, thunkGetBooks, isFetching, thunkAddBooks, sortToLowestPrice, sortToHigherPrice, addBookToOrder}) => {

    useEffect(() => {
        thunkGetBooks()
    }, [thunkGetBooks]);

    const showMoreHandler = () => thunkAddBooks();

    if (isFetching && !books) return <Preloader/>;
    return (
        <div>
            <Sort sortToHigh={sortToHigherPrice} sortToLow={sortToLowestPrice}/>
            {books!.map(book => <BookItem key={book.id + Math.random()} book={book} addBookToOrder={addBookToOrder}/>)}
            {!isFetching && <div className={classes.showMore}>
                <Button variant="contained" color="secondary" onClick={showMoreHandler}>Show more</Button>
            </div>}
            {isFetching && <Preloader/>}
        </div>
    )
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    books: state.booksPage.books,
    isFetching: state.booksPage.isFetching
});

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>(mapStateToProps, {
        thunkGetBooks,
        thunkAddBooks,
        sortToLowestPrice: booksActions.sortToLowestPrice,
        sortToHigherPrice: booksActions.sortToHigherPrice,
        addBookToOrder: orderActions.addBookToOrder
    })
)(BooksPage);