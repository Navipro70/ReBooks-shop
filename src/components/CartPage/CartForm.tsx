import React from "react";
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";

export const CartForm = () => {
    return (
        <>
            <Button variant='contained'>Go to clearance</Button>
            <p>Available methods and delivery time can be selected at checkout</p>
            <p>Check avialeble counties for deliviring</p>
            <NavLink to="/">
                <Button variant='contained'>Continue shopping</Button>
            </NavLink>
        </>
    )
};
