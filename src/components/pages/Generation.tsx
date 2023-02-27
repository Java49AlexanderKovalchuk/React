import { TextField, Box, Button, Alert } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { employeesActions } from "../../redux/empolyees-slice";
import { createRandomEmployee } from "../../service/EmloyeesService";
import generationConfig from "../../config/generation-config.json"

export const Generation: React.FC = () => {

    const dispatch = useDispatch();
    const {defaultAmount, minAmount, maxAmount, alertTimeout} = generationConfig;
    const [amount, setAmount] = useState<number>(defaultAmount);
    const [flAlertSuccess, setFlAlertSuccess] = useState<boolean>(false);
    
    function handlerAmount(event:any): void {
       setAmount(+event.target.value);
    }
    function onSubmit(event:any): void {
        event.preventDefault();
        for(let i:number = 0; i < amount; i++) {
            dispatch(employeesActions.addEmployee(createRandomEmployee()));
        } 
        setFlAlertSuccess(true);
        setTimeout(() => setFlAlertSuccess(false), alertTimeout);
    }

    return <Box>
        <form onSubmit={onSubmit}>
            <TextField type='number' fullWidth required 
            label='amount of Employees'
            onChange={handlerAmount} value={amount}
            helperText={`Enter amount of Employees in range [${minAmount}-${maxAmount}]`}
            inputProps={{
                min: `${minAmount}`,
                max: `${maxAmount}`
            }} />
        <Button type="submit">Generate</Button>
        </form>
        {flAlertSuccess && <Alert security="success">
            generated {amount} random employees</Alert>}
        
    </Box>
}
