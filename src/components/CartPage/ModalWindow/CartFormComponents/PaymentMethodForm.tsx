import React, {FC} from "react";
import {Button, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import {Form, FormikProps, withFormik} from "formik";
import classes from "../Modal.module.css";

type TProps = {
    setWhatShowing: (whatShowing: 1 | 2 | 3) => void
}

const PaymentMethodForm: FC<TProps & FormikProps<TCartFormik>> = ({values, handleChange}) => {
    return (
        <Form>
            <RadioGroup name="paymentMethod" value={values.paymentMethod} onChange={handleChange}>
                <FormControlLabel value="alfaBank" control={<Radio/>} label="AlfaBank"/>
                <FormControlLabel value="masterCard" control={<Radio/>} label="MasterCard"/>
                <FormControlLabel value="visa" control={<Radio/>} label="Visa"/>
            </RadioGroup>
            <div className={classes.second_button}>
                <Button type="submit" color="primary" variant="contained">Submit</Button>
            </div>
        </Form>
    )
};

const cartFormikData = {
    paymentMethod: "alfaBank"
};

type TCartFormik = typeof cartFormikData;

export const PaymentMethodFormik = withFormik<TProps, TCartFormik>({
    mapPropsToValues: () => cartFormikData,
    handleSubmit: (values, FormikBag) => {
        FormikBag.props.setWhatShowing(3);
        console.log(values)
    }
})
(PaymentMethodForm);