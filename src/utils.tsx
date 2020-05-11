export const onNumberFieldChange = (setFieldValue: (field: string, value: any,) => void, inputName: string, phone?: boolean, slicer?: number) => (e: any) => {
    e.preventDefault();
    const {value} = e.target;
    const regex = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
    if ((!value || regex.test(value.slice(3).toString())) && phone) {
        if (value.length === 1) setFieldValue(inputName, '+' + value.slice(0, 13));
        setFieldValue(inputName, value.slice(0, 13));
    }
    else if (slicer && (!value || regex.test(value.slice(slicer).toString()))){
        setFieldValue(inputName, value.slice(0, slicer ));
    }
    else if (!value || regex.test(value.toString())) {
        setFieldValue(inputName, value);
    }
};

export const validatePhoneCodes = (value: string) => {
    const codeOperator = value.slice(4, 6);
    if (value.length > 4 && (codeOperator === '29' || codeOperator === '33' || codeOperator === '44' || codeOperator === '25')) return true;
    return false
};