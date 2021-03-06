import React from "react";
import {NavLink} from "react-router-dom";
import classes from "../OrderPage/Order.module.css";

export const OrderWithoutItems = () => {
    return (
        <div className={classes.orderWithoutItems}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1024px-SNice.svg.png" alt=""/>
           <h4>
               You dont have any books.
               <NavLink to="/"> Want buy something?</NavLink>
               <NavLink to="order/previousOrders"> Or check your previous orders</NavLink>
           </h4>
        </div>
    );
};