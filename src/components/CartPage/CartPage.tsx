import React from "react";
import classes from "./Cart.module.css";
import OrderPage from "../OrderPage/OrderPage";
import { CartForm } from "./CartForm";

export const CartPage = () => {
    return (
        <div className={classes.mainCart}>
            <div>
                <OrderPage />
            </div>
            <div className={classes.cartForm}>
                <CartForm/>
            </div>
        </div>
    )
};