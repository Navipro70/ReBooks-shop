import React, {FC} from "react";
import {Button, Input} from "@material-ui/core";
import classes from "../Modal.module.css";
import {withFormik, FormikProps, Form} from "formik";
import 'react-credit-cards/es/styles-compiled.css';
import * as Yup from "yup";
import {onNumberFieldChange, validatePhoneCodes} from "../../../../utils";
import {ErrorMessage} from "../../../CommonComponents/ErrorMessage";

type TContactsFormik = {
    email: string,
    address: string,
    phone: string
}

type TProps = {
    setWhatShowing: (whatShowing: 1 | 2 | 3) => void,
    addContactInformation: (email: string, address: string, phone: string) => void
}

const ContactsForm: FC<TProps & FormikProps<TContactsFormik>> = ({values, handleChange, errors, touched, handleBlur, setFieldValue, setFieldTouched}) => {
    const {email: emailTouched, address: addressTouched, phone: phoneTouched} = touched;
    const {email: emailError, address: addressError, phone: phoneError} = errors;
    return (
        <Form className={classes.modal__form}>
            <div className={classes.contacts_block}>
                <h4>Contact information</h4>
                <Input onChange={handleChange}
                       name="email"
                       value={values.email}
                       error={Boolean(emailTouched && emailError)}
                       placeholder="Email"
                       onFocus={() => setFieldTouched('email', false)}
                       onBlur={handleBlur}
                />
                <ErrorMessage touched={emailTouched} error={emailError}/>
                <Input onChange={handleChange}
                       name="address"
                       value={values.address}
                       error={Boolean(addressTouched && addressError)}
                       placeholder="Address"
                       onFocus={() => setFieldTouched('address', false)}
                       onBlur={handleBlur}
                />
                <ErrorMessage touched={addressTouched} error={addressError}/>
                <Input
                    onChange={onNumberFieldChange(setFieldValue, 'phone', true)} //Use custom util with regex to allow only numbers in field
                    name="phone"
                    value={values.phone}
                    error={Boolean(phoneTouched && phoneError)}
                    placeholder="Phone"
                    onFocus={() => setFieldTouched('phone', false)}
                    onBlur={handleBlur}
                />
                <ErrorMessage touched={phoneTouched} error={phoneError}/>
            </div>
            <div className={classes.second_button}>
                <Button type="submit" color="primary" variant="contained">Submit</Button>
            </div>
        </Form>
    )
};

export const ContactsFormik = withFormik<TProps & TContactsFormik, TContactsFormik>({
    mapPropsToValues: ({email, address, phone}) => ({
        email: email,
        address: address,
        phone: phone
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('Email is not valid')
            .required('Email is required'),
        address: Yup.string()
            .required()
            .min(2, 'Too short')
            .max(50, 'Too long'),
        phone: Yup.string()
            .min(13, 'Phone is too short')
            .test('Checking code operators',
                'Operator code is not valid, please write valid operator code (25, 29, 33, 44)',
                validatePhoneCodes)
            .required()
    }),
    handleSubmit: (values, FormikBag) => {
        FormikBag.props.addContactInformation(values.email, values.address, values.phone);
        FormikBag.props.setWhatShowing(2);
        console.log(values)
    }
})
(ContactsForm);
