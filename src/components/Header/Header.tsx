import React from "react"
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={classes.header}>
            <NavLink to="/">ReBooks</NavLink>
            <NavLink to="/order">Oder</NavLink>
            <NavLink to="/cart">Cart</NavLink>
        </div>
    )
};