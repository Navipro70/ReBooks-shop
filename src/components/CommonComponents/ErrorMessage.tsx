import React, {FC} from "react";

export const ErrorMessage: FC<{touched: boolean | undefined, error: string | undefined}> = ({touched, error}) => (
    <>
    {touched && error && <div style={{color: "red"}}>{error}</div>}
    </>
);