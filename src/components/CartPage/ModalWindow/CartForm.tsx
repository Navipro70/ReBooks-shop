import React, {FC, ComponentType} from "react";
import {ContactsFormik} from "./CartFormComponents/ContactsForm";
import {CreditCardFormik} from "./CartFormComponents/CreditCardForm";
import {PaymentMethodFormik} from "./CartFormComponents/PaymentMethodForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {cartActions, initialState} from "../../../redux/cart-reducer";

type TMapStateProps = typeof initialState

type TMapDispatchProps = {
    addContactInformation: (email: string, address: string, phone: string) => void,
    addPaymentMethod: (paymentMethod: string) => void,
    addCreditCardInformation: (number: string, name: string, expiry: string, cvc: string) => void
}

type TProps = {
    whatShowing: 1 | 2 | 3
    setWhatShowing: (whatShowing: 1 | 2 | 3) => void
}

const CartForm: FC<TProps & TMapStateProps & TMapDispatchProps> = ({whatShowing, setWhatShowing, email, address, phone, addContactInformation}) => {
    return (
        <div>
            {whatShowing === 1 && <ContactsFormik email={email}
                                                  address={address}
                                                  phone={phone}
                                                  addContactInformation={addContactInformation}
                                                  setWhatShowing={setWhatShowing}/>}
            {whatShowing === 2 && <PaymentMethodFormik setWhatShowing={setWhatShowing}/>}
            {whatShowing === 3 && <CreditCardFormik/>}
        </div>
    )
};

const mapStateToProps = (state: AppStateType) => ({
    email: state.cartPage.email,
    address: state.cartPage.address,
    phone: state.cartPage.phone,
    paymentMethod: state.cartPage.paymentMethod,
    number: state.cartPage.number,
    name: state.cartPage.name,
    expiry: state.cartPage.expiry,
    cvc: state.cartPage.cvc
});

export default compose<ComponentType<TProps>>(
    connect<TMapStateProps, TMapDispatchProps, TProps, AppStateType>(mapStateToProps, {
        addContactInformation: cartActions.addContactInformation,
        addPaymentMethod: cartActions.addPaymentMethod,
        addCreditCardInformation: cartActions.addCreditCardInformation
    })
)(CartForm)