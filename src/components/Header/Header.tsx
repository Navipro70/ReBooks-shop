import React from "react"
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


export const Header = () => {
    return (
        <div className={classes.header}>
            <NavLink to="/">ReBooks</NavLink>
            <NavLink to="/order">Oder</NavLink>
            <NavLink style={{marginTop: "5px"}} to="/cart"><ShoppingCartIcon /></NavLink>
        </div>
    )
};