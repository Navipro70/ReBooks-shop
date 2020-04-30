import React from "react";
import {CircularProgress} from "@material-ui/core";

export const Preloader = () => {
    return (
        <div style={{textAlign: "center", marginTop: "20px"}}>
            <CircularProgress color="secondary"/>
        </div>
    );
};