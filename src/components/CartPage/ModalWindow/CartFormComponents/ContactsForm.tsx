import React, {FC} from "react";
import {Button, Input} from "@material-ui/core";
import classes from "../Modal.module.css";
import {withFormik, FormikProps, Form} from "formik";
import 'react-credit-cards/es/styles-compiled.css';
import * as Yup from "yup";
import {onNumberFieldChange, validatePhoneCodes} from "../../../../utils";

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
    return (
        <Form className={classes.modal__form}>
            <div className={classes.contacts_block}>
                <h4>Contact information</h4>
                <Input onChange={handleChange}
                       name="email"
                       value={values.email}
                       error={(touched.email && errors.email) as boolean}
                       placeholder="Email"
                       onFocus={() => setFieldTouched('email', false)}
                       onBlur={handleBlur}
                />
                {touched.email && errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                <Input onChange={handleChange}
                       name="address"
                       value={values.address}
                       error={(touched.address && errors.address) as boolean}
                       placeholder="Address"
                       onFocus={() => setFieldTouched('address', false)}
                       onBlur={handleBlur}
                />
                {touched.address && errors.address && <p style={{color: "red"}}>{errors.address}</p>}
                <Input
                    onChange={onNumberFieldChange(setFieldValue, 'phone', true)} //Use custom util with regex to allow only numbers in field
                    name="phone"
                    value={values.phone}
                    error={(touched.phone && errors.phone) as boolean}
                    placeholder="Phone"
                    onFocus={() => setFieldTouched('phone', false)}
                    onBlur={handleBlur}
                />
                {touched.phone && errors.phone && <p style={{color: "red"}}>{errors.phone}</p>}
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
