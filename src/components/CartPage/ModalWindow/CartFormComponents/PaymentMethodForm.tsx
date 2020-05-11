import React, {FC} from "react";
import {Button, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import {Form, FormikProps, withFormik} from "formik";
import classes from "../Modal.module.css";

type TProps = {
    setWhatShowing: (whatShowing: 1 | 2 | 3) => void
    addPaymentMethod: (paymentMethod: string) => void
    paymentMethod: string
    commonPrice: number
}

const PaymentMethodForm: FC<TProps & FormikProps<TCartFormik>> = ({values, handleChange, commonPrice}) => {
    return (
        <Form>
            <RadioGroup name="paymentMethod" value={values.paymentMethod} onChange={handleChange}>
                <FormControlLabel value="alfaBank" control={<Radio/>} label="AlfaBank"/>
                <FormControlLabel value="masterCard" control={<Radio/>} label="MasterCard"/>
                <FormControlLabel value="visa" control={<Radio/>} label="Visa"/>
            </RadioGroup>
            <div>
                To pay: {commonPrice} USD
            </div>
            <div className={classes.second_button}>
                <Button type="submit" color="primary" variant="contained">Submit</Button>
            </div>
        </Form>
    )
};

type TCartFormik = Pick<TProps, 'paymentMethod'>;

export const PaymentMethodFormik = withFormik<TProps, TCartFormik>({
    mapPropsToValues: ({paymentMethod}) => ({
        paymentMethod
    }),
    handleSubmit: (values, FormikBag) => {
        FormikBag.props.addPaymentMethod(values.paymentMethod);
        FormikBag.props.setWhatShowing(3);
        console.log(values)
    }
})
(PaymentMethodForm);