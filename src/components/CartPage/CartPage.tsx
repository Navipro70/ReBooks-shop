import React, {useState, FC} from "react";
import classes from "./Cart.module.css";
import {Button} from "@material-ui/core";
import {NavLink, Redirect} from "react-router-dom";
import {ModalWindow} from "./ModalWindow/ModalWindow";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";

const CartPage: FC<TMapStateProps> = ({commonPrice}) => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [whatShowing, setWhatShowing] = useState<1 | 2 | 3>(1);
    const toggleModal = (isOpen: boolean) => setModalOpen(isOpen);
    if (commonPrice === 0) return <Redirect to="/order/previousOrders"/>;
    return (
        <div className={classes.cartForm}>
            <Button variant='contained' onClick={toggleModal.bind(null, true)}>Go to clearance</Button>
            <p>Available methods and delivery time can be selected at checkout</p>
            <p>Check available counties for delivering</p>
            <NavLink to="/">
                <Button variant='contained'>Continue shopping</Button>
            </NavLink>
            {isModalOpen &&
            <ModalWindow whatShowing={whatShowing}
                         setWhatShowing={setWhatShowing}
                         toggleModal={toggleModal}/>}
        </div>
    )
};

const mapStateToProps = (state: AppStateType) => ({
    commonPrice: state.orderPage.commonPrice,
});

type TMapStateProps = ReturnType<typeof mapStateToProps>

export default compose(
    connect<TMapStateProps, {}, {}, AppStateType>(
        mapStateToProps, {}
    )
)(CartPage)