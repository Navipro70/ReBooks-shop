import React, {FC} from "react";
import 'react-credit-cards/es/styles-compiled.css';
import {ContactsFormik} from "./CartFormComponents/ContactsForm";
import {CreditCardFormik} from "./CartFormComponents/CreditCardForm";
import {PaymentMethodFormik} from "./CartFormComponents/PaymentMethodForm";

type TProps = {
    whatShowing: 1 | 2 | 3
    setWhatShowing: (whatShowing: 1 | 2 | 3) => void
}

export const CartForm: FC<TProps> = ({whatShowing, setWhatShowing}) => {
    return (
        <div>
            {whatShowing === 1 && <ContactsFormik setWhatShowing={setWhatShowing}/>}
            {whatShowing === 2 && <PaymentMethodFormik setWhatShowing={setWhatShowing}/>}
            {whatShowing === 3 && <CreditCardFormik/>}
        </div>
    )
};
