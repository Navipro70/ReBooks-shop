import React, {FC} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import classes from "./Order.module.css";
import {AppStateType} from "../../redux/store";
import {TBook} from "../../redux/books-reducer";
import {OrderItem} from "./OrderItem";

type TMapStateProps = {
    previousOrder: Array<Array<TBook>>
}

export const PreviousOrders: FC<TMapStateProps> = ({previousOrder}) => {
    if (previousOrder.length === 0) return <div>You dont have previous orders, want but something?</div>;
    return (
        <div className={classes.allOrders}>
            {previousOrder.map(booksArray => <div>
                    <h4>Date of this order: {Date.now()}</h4>
                    {
                        booksArray.map(book => <OrderItem
                            key={book.id + Math.random()}
                            book={book}
                            addBook={() => console.log('hello')}
                            removeBook={() => console.log('hello')}
                            removeCertainBooks={() => console.log('hello')}/>)
                    }
                </div>
            )}
        </div>
    )
};

const mapStateToProps = (state: AppStateType): TMapStateProps => ({
    previousOrder: state.orderPage.previousOrders
});

export const PreviousOrdersCompose = compose(
    connect<TMapStateProps, {}, {}, AppStateType>(mapStateToProps, {})
)(PreviousOrders);