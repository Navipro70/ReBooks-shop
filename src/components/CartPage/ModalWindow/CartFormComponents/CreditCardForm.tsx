import React, {FC, useState} from "react";
import Cards from 'react-credit-cards';
import {Button, Input} from "@material-ui/core";
import classes from "../Modal.module.css";
import {withFormik, FormikProps, Form} from "formik";
import 'react-credit-cards/es/styles-compiled.css';
import * as Yup from "yup";
import {onNumberFieldChange} from "../../../../utils";
import {TMapDispatchProps} from "../CartForm";
import {TRootProps} from "../ModalWindow";
import {ErrorMessage} from "../../../CommonComponents/ErrorMessage";

type TProps =
    Pick<TMapDispatchProps, 'addCreditCardInformation' | 'thunkSubmitOrder'>
    & Omit<TRootProps, 'whatShowing'>
    & TCartFormik

type TCartFormik = {
    number: string,
    name: string,
    expiry: string,
    cvc: string,
};

const CreditCardForm:
    FC<TProps & FormikProps<TCartFormik>> = ({
                                                 values, handleChange, errors, touched, setFieldValue,
                                                 handleBlur, setFieldTouched, addCreditCardInformation,
                                                 setWhatShowing
                                             }) => {
    const {number, name, expiry, cvc} = values;
    const [focus, setFocus] = useState(undefined);
    const handleInputFocus = (fieldName: string) => (e: any) => {
        setFocus(e.target.name);
        setFieldTouched(fieldName, false)
    };
    const onBackHandler = () => {
        addCreditCardInformation(number, name, expiry, cvc);
        setWhatShowing(2)
    };
    const {number: numberError, name: nameError, expiry: expiryError, cvc: cvcError} = errors;
    const {number: numberTouched, name: nameTouched, expiry: expiryTouched, cvc: cvcTouched} = touched;

    return (
        <Form className={classes.modal__form}>
            <Cards focused={focus} cvc={cvc} expiry={expiry} name={name} number={number} issuer="mastercard"/>
            <div className={classes.contacts_block}>
                <Input
                    onChange={onNumberFieldChange(setFieldValue, 'number', false, 16)}
                    name="number"
                    type="tel"
                    value={number}
                    placeholder="Card number"
                    error={Boolean(numberTouched && numberError)}
                    onFocus={handleInputFocus('number')}
                    onBlur={handleBlur}
                />
                <ErrorMessage error={numberError} touched={numberTouched}/>
                <Input
                    onChange={handleChange}
                    name="name"
                    value={name}
                    placeholder="Your Name"
                    error={Boolean(nameTouched && nameError)}
                    onFocus={handleInputFocus('name')}
                    onBlur={handleBlur}
                />
                <ErrorMessage error={nameError} touched={nameTouched}/>
                <Input
                    onChange={onNumberFieldChange(setFieldValue, 'expiry', false, 4)}
                    name="expiry"
                    type="tel"
                    value={expiry}
                    placeholder="Expiration date"
                    error={Boolean(expiryTouched && expiryError)}
                    onFocus={handleInputFocus('expiry')}
                    onBlur={handleBlur}
                />
                <ErrorMessage error={expiryError} touched={expiryTouched}/>
                <Input
                    onChange={onNumberFieldChange(setFieldValue, 'cvc', false, 3)}
                    name="cvc"
                    type="tel"
                    value={cvc}
                    placeholder="CVC/CV2"
                    error={Boolean(cvcTouched && cvcError)}
                    onFocus={handleInputFocus('cvc')}
                    onBlur={handleBlur}
                />
                <ErrorMessage error={cvcError} touched={cvcTouched}/>
            </div>
            <div className={classes.first_button}>
                <Button onClick={onBackHandler} variant="contained" color="secondary">Back</Button>
            </div>
            <div className={classes.second_button}>
                <Button type="submit" color="primary" variant="contained">Submit</Button>
            </div>
        </Form>
    )
};

export const CreditCardFormik = withFormik<TProps, TCartFormik>({
    mapPropsToValues: ({number, name, expiry, cvc}) => ({
        number: number,
        name: name,
        expiry: expiry,
        cvc: cvc
    }),
    validationSchema: Yup.object().shape({
        number: Yup.string()
            .min(16, 'Card number must be 16 numbers (without spaces)')
            .required(),
        name: Yup.string()
            .max(50, 'Name is too long')
            .min(2, 'Name is too short')
            .required(),
        expiry: Yup.string()
            .min(4, 'Use format like: 01/20 (month/year without /)')
            .required(),
        cvc: Yup.string()
            .min(3, "It's three-digit-code")
            .required()
    }),
    handleSubmit: (values, FormikBag) => {
        const {number, name, expiry, cvc} = values;
        FormikBag.props.addCreditCardInformation(number, name, expiry, cvc);
        FormikBag.props.thunkSubmitOrder();
    }
})
(CreditCardForm);