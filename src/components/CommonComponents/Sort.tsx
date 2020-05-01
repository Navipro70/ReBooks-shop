import React, {FC} from "react";
import classes from "./Sort.module.css";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type PropsType = {
    sortToHigh: () => void
    sortToLow: () => void
}

export const Sort: FC<PropsType> = ({sortToHigh, sortToLow}) => {
    return (
        <div className={classes.sort}>
            <span>Price</span>
            <ExpandLessIcon onClick={sortToHigh.bind(null)}/>
            <ExpandMoreIcon onClick={sortToLow.bind(null)}/>
        </div>
    )
};