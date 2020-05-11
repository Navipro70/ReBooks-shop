import React, {FC} from "react";
import classes from "./Modal.module.css";
import {Button} from "@material-ui/core";
import CartForm from "./CartForm";

export type TRootProps = {
    toggleModal: (isOpen: boolean) => void
    whatShowing: 1 | 2 | 3
    setWhatShowing: (num: 1 | 2 | 3) => void
}

export const ModalWindow: FC<TRootProps> = ({toggleModal, whatShowing, setWhatShowing}) => {
    const onBackHandler = () => {
        return setWhatShowing(whatShowing - 1 as 1 | 2 | 3)
    };

    return (
        <>
            <div className={classes.modal}>
                <svg className={classes.modal__cross} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     onClick={toggleModal.bind(null, false)}>
                    <path
                        d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
                </svg>
                <CartForm toggleModal={toggleModal} whatShowing={whatShowing} setWhatShowing={setWhatShowing}/>
                {whatShowing !== 1 && <div className={classes.first_button}>
                    <Button onClick={onBackHandler} variant="contained" color="secondary">Back</Button>
                </div>}
            </div>
            <div className={classes.overlay} onClick={toggleModal.bind(null, false)}/>
        </>
    )
};