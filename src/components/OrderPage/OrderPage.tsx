import React, {ComponentType, FC} from "react";
import classes from "./Order.module.css"
import {compose} from "redux";
import {connect} from "react-redux";
import {TBook} from "../../redux/books-reducer";
import {AppStateType} from "../../redux/store";
import {OrderItem} from "./OrderItem";
import {OrderWithoutItems} from "./OrderWuthoutItems";
import {NavLink} from "react-router-dom";
import {orderActions} from "../../redux/order-reducer";

type MapStatePropsType = {
    booksInOrder: Array<TBook>
    totalCount: number
    commonPrice: number
}

type MadDispatchPropsType = {
    removeCertainBooks: (id: number) => void
    addBook: (id: number) => void
    removeBook: (id: number) => void
}

const OrderPage: FC<MapStatePropsType & MadDispatchPropsType> = ({booksInOrder, commonPrice, totalCount, removeCertainBooks, addBook, removeBook}) => {
    if (!booksInOrder.length) return <OrderWithoutItems/>;
    return (
        <div className={classes.allOrders}>
            <div className={classes.orderInfo}>
                <h4>Total count</h4>
                <h4>Name</h4>
                <h4>Price</h4>
            </div>
            {booksInOrder.map(book => <OrderItem
                key={book.id + Math.random()}
                book={book}
                removeCertainBooks={removeCertainBooks}
                addBook={addBook}
            removeBook={removeBook}/>)}
            <div className={classes.menu}>
                <h4>Count: {totalCount}</h4>
                <h4><NavLink to="/cart">Get order</NavLink></h4>
                <h4>Total price: {commonPrice} USD</h4>
            </div>
        </div>
    )
};

const MapStateToProps = (state: AppStateType) => ({
    booksInOrder: state.orderPage.booksInOrder,
    totalCount: state.orderPage.totalCount,
    commonPrice: state.orderPage.commonPrice
});

export default compose<ComponentType>(
    connect<MapStatePropsType, MadDispatchPropsType, null, AppStateType>(MapStateToProps, {
        removeCertainBooks: orderActions.removeCertainBooksFromOrder,
        addBook: orderActions.addOneBookToOrder,
        removeBook: orderActions.removeOneBookFromOrder
    })
)(OrderPage)