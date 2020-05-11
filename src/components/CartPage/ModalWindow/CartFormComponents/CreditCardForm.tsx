import React, {FC, useState} from "react";
import Cards from 'react-credit-cards';
import {Button, Input} from "@material-ui/core";
import classes from "../Modal.module.css";
import {withFormik, FormikProps, Form} from "formik";
import 'react-credit-cards/es/styles-compiled.css';
import * as Yup from "yup";

const CreditCardForm: FC<FormikProps<TCartFormik>> = ({values, handleChange, errors, touched}) => {
    const [focus, setFocus] = useState(undefined);
    const handleInputFocus = (e: any) => {
        setFocus(e.target.name);
    };

    return (
        <Form className={classes.modal__form}>
            <Cards focused={focus}
                   cvc={values.cvc}
                   expiry={values.expiry}
                   name={values.name}
                   number={values.number}
                   issuer="mastercard"
            />
            <div className={classes.contacts_block}>
                <Input onChange={handleChange}
                       onFocus={handleInputFocus}
                       name="number"
                       type="tel"
                       value={values.number}
                       placeholder="Card number"
                />
                {touched.number && errors.number && <p style={{color: "red"}}>{errors.number}</p>}
                <Input onChange={handleChange}
                       onFocus={handleInputFocus}
                       name="name"
                       value={values.name}
                       placeholder="Your Name"
                />
                {touched.name && errors.name && <p style={{color: "red"}}>{errors.name}</p>}
                <Input onChange={handleChange}
                       onFocus={handleInputFocus}
                       name="expiry"
                       type="tel"
                       value={values.expiry}
                       placeholder="Expiration date"
                />
                {touched.expiry && errors.expiry && <p style={{color: "red"}}>{errors.expiry}</p>}
                <Input onChange={handleChange}
                       onFocus={handleInputFocus}
                       name="cvc"
                       type="tel"
                       value={values.cvc}
                       placeholder="CVC/CV2"
                />
                {touched.cvc && errors.cvc && <p style={{color: "red"}}>{errors.cvc}</p>}
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

export const CreditCardFormik = withFormik<{}, TCartFormik>({
    mapPropsToValues: () => cartFormikData,
    validationSchema: Yup.object().shape({
        number: Yup.string()
            .min(16, 'Card number must be 16 numbers (without spaces)')
            .max(16, 'Card number must be 16 numbers (without spaces)')
            .required(),
        name: Yup.string()
            .required(),
        expiry: Yup.number()
            .min(120, 'Use format like: 01/20 (month/year without /)')
            .max(1299, 'Use format like: 01/20 (month/year without /)')
            .required(),
        cvc: Yup.string()
            .min(3, "It's three-digit-code")
            .max(3, "It's three-digit-code")
            .required()
    }),
    handleSubmit: (values) => {
        console.log(values)
    }
})
(CreditCardForm);