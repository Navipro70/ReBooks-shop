import React, {FC} from "react";
import {Button, Input} from "@material-ui/core";
import classes from "../Modal.module.css";
import {withFormik, FormikProps, Form} from "formik";
import 'react-credit-cards/es/styles-compiled.css';
import * as Yup from "yup";

type TProps = {
    setWhatShowing: (whatShowing: 1 | 2 | 3) => void
}

const ContactsForm: FC<TProps & FormikProps<TCartFormik>> = ({values, handleChange, errors, touched}) => {
    return (
        <Form className={classes.modal__form}>
            <div className={classes.contacts_block}>
                <h4>Contact information</h4>
                <Input onChange={handleChange} name="email" value={values.email} placeholder="Email"/>
                {touched.email && errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                <Input onChange={handleChange} name="address" value={values.address} placeholder="Address"/>
                {touched.address && errors.address && <p style={{color: "red"}}>{errors.address}</p>}
                <Input onChange={handleChange} name="phone" value={values.phone} placeholder="Phone"/>
                {touched.phone && errors.phone && <p style={{color: "red"}}>{errors.phone}</p>}
            </div>
            <div className={classes.second_button}>
                <Button type="submit" color="primary" variant="contained">Submit</Button>
            </div>
        </Form>
    )
};

const cartFormikData = {
    email: "",
    address: "",
    phone: "",
};

type TCartFormik = typeof cartFormikData;

export const ContactsFormik = withFormik<TProps, TCartFormik>({
    mapPropsToValues: () => cartFormikData,
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email is not valid').required('Email is required'),
        address: Yup.string().required(),
        phone: Yup.number().required(),
    }),
    handleSubmit: (values, FormikBag) => {
        FormikBag.props.setWhatShowing(2);
        console.log(values)
    }
})
(ContactsForm);