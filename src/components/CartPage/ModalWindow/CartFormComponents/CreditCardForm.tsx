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

type TProps = Pick<TMapDispatchProps, 'addCreditCardInformation'> & Pick<TRootProps, 'toggleModal'>

const CreditCardForm: FC<TProps & FormikProps<TCartFormik>> = ({values, handleChange, errors, touched, setFieldValue, handleBlur, setFieldTouched}) => {
    const [focus, setFocus] = useState(undefined);
    const handleInputFocus = (fieldName: string) => (e: any) => {
        setFocus(e.target.name);
        setFieldTouched(fieldName, false)
    };
    const {number: numberError, name: nameError, expiry: expiryError, cvc: cvcError} = errors;
    const {number: numberTouched, name: nameTouched, expiry: expiryTouched, cvc: cvcTouched} = touched;

    return (
        <Form className={classes.modal__form}>
            <Cards
                focused={focus}
                cvc={values.cvc}
                expiry={values.expiry}
                name={values.name}
                number={values.number}
                issuer="mastercard"
            />
            <div className={classes.contacts_block}>
                <Input
                    onChange={onNumberFieldChange(setFieldValue, 'number', false, 16)}
                    name="number"
                    type="tel"
                    value={values.number}
                    placeholder="Card number"
                    error={Boolean(numberTouched && numberError)}
                    onFocus={handleInputFocus('number')}
                    onBlur={handleBlur}
                />
                <ErrorMessage error={numberError} touched={numberTouched}/>
                <Input
                    onChange={handleChange}
                    name="name"
                    value={values.name}
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
                    value={values.expiry}
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
                    value={values.cvc}
                    placeholder="CVC/CV2"
                    error={Boolean(cvcTouched && cvcError)}
                    onFocus={handleInputFocus('cvc')}
                    onBlur={handleBlur}
                />
                <ErrorMessage error={cvcError} touched={cvcTouched}/>
            </div>
            <div className={classes.second_button}>
                <Button type="submit" color="primary" variant="contained">Submit</Button>
            </div>
        </Form>
    )
};

const cartFormikData = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
};

type TCartFormik = typeof cartFormikData;

export const CreditCardFormik = withFormik<TProps, TCartFormik>({
    mapPropsToValues: () => cartFormikData,
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
        FormikBag.props.toggleModal(false)
    }
})
(CreditCardForm);