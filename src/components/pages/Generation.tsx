import { TextField, Box, Button, Alert } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { employeesActions, employeesReducer } from "../../redux/empolyees-slice";
import { createRandomEmployee } from "../../service/EmloyeesService";
import generationConfig from "../../config/generation-config.json"
import { Employees } from "./Employees";
import { Employee } from "../../model/Employee";
import { CodeType } from "../../model/CodeType";
import { codeActions } from "../../redux/codeSlice";

export const Generation: React.FC = () => {

    const dispatch = useDispatch();
    const {defaultAmount, minAmount, maxAmount, alertTimeout} = generationConfig;
    const [amount, setAmount] = useState<number>(defaultAmount);
    const [flAlertSuccess, setAlertAccess] = useState<boolean>(false);
    const code: CodeType = useSelector<any, CodeType>(state => state.errorCode.code);
    function handlerAmount(event:any): void {
       setAmount(+event.target.value);
    }
    function onSubmit(event:any): void {
        event.preventDefault();
        const employeesAr: Employee[] =
        Array.from({length: amount}).map(_ => createRandomEmployee());
        dispatch(employeesActions.addBulkEmployees(employeesAr));
        alertAccess();
        
        // setFlAlertSuccess(true);
        // setTimeout(() => setFlAlertSuccess(false), alertTimeout);
    }
    function alertAccess() {
        setTimeout(() => {if(code === 'OK') setAlertAccess(true)}, 200);
        setTimeout(() => setAlertAccess(false), 5000);
    }

    return <Box>
        <form onSubmit={onSubmit}>
            <TextField type='number' fullWidth required 
            label='amount of Employees generated'
            onChange={handlerAmount} value={amount}
            helperText={`Enter amount of Employees in range [${minAmount}-${maxAmount}]`}
            inputProps={{
                min: `${minAmount}`,
                max: `${maxAmount}`
            }} />
        <Button type="submit">Generate</Button>
        </form>
        {flAlertSuccess && code === "OK" && <Alert severity="success">
            generated {amount} random employees</Alert>}
        {code !== "OK" && <Alert severity="error" 
            onClose={() => {
                dispatch(codeActions.setCode("OK"));
                setAlertAccess(false);
            }}>{code}</Alert>}
        
    </Box>
}
