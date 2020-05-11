import React, {FC, ComponentType} from "react";
import {ContactsFormik} from "./CartFormComponents/ContactsForm";
import {CreditCardFormik} from "./CartFormComponents/CreditCardForm";
import {PaymentMethodFormik} from "./CartFormComponents/PaymentMethodForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {cartActions, initialState} from "../../../redux/cart-reducer";
import {TRootProps} from "./ModalWindow";

type TMapStateProps = typeof initialState & { commonPrice: number }

export type TMapDispatchProps = {
    addContactInformation: (email: string, address: string, phone: string) => void,
    addPaymentMethod: (paymentMethod: string) => void,
    addCreditCardInformation: (number: string, name: string, expiry: string, cvc: string) => void
}

type TAllProps = TRootProps & TMapStateProps & TMapDispatchProps

const CartForm: FC<TAllProps> = ({
                                     whatShowing, setWhatShowing, email, address, phone, paymentMethod,
                                     number, name, expiry, cvc, addContactInformation, addPaymentMethod,
                                     addCreditCardInformation, toggleModal, commonPrice
                                 }) => (
    <div>
        {whatShowing === 1 && <ContactsFormik email={email}
                                              address={address}
                                              phone={phone}
                                              addContactInformation={addContactInformation}
                                              setWhatShowing={setWhatShowing}/>}
        {whatShowing === 2 && <PaymentMethodFormik setWhatShowing={setWhatShowing}
                                                   paymentMethod={paymentMethod}
                                                   addPaymentMethod={addPaymentMethod}
                                                   commonPrice={commonPrice}/>}
        {whatShowing === 3 && <CreditCardFormik addCreditCardInformation={addCreditCardInformation}
                                                toggleModal={toggleModal}
                                                number={number}
                                                name={name}
                                                expiry={expiry}
                                                cvc={cvc}
                                                setWhatShowing={setWhatShowing}/>}
    </div>
);

const mapStateToProps = (state: AppStateType): TMapStateProps => ({
    email: state.cartPage.email,
    address: state.cartPage.address,
    phone: state.cartPage.phone,
    paymentMethod: state.cartPage.paymentMethod,
    number: state.cartPage.number,
    name: state.cartPage.name,
    expiry: state.cartPage.expiry,
    cvc: state.cartPage.cvc,
    commonPrice: state.orderPage.commonPrice
});

export default compose<ComponentType<TRootProps>>(
    connect<TMapStateProps, TMapDispatchProps, TRootProps, AppStateType>(mapStateToProps, ({
        addContactInformation: cartActions.addContactInformation,
        addPaymentMethod: cartActions.addPaymentMethod,
        addCreditCardInformation: cartActions.addCreditCardInformation,
    } as TMapDispatchProps))
)(CartForm)