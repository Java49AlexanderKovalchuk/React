import { authActions } from "../../redux/auth-slice";
import { useDispatch } from 'react-redux'
import React, { useState } from "react";
import { AuthService } from "../../service/AuthService";
import { LoginForm } from "../forms/LoginForm";
import { LoginData } from "../../model/LoginData";
import { Alert, Box } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

const ALERT_MESSAGE = 'Wrong username and/or password'

export const Login: React.FC = () => {
    const dispatch = useDispatch();
    const auth = new AuthService();
    const [flAlert, setFlAlert] = useState(false);
    const [open, setOpen] = React.useState(true);
    
    return <Box>
        <LoginForm signInFn={function (obj: LoginData): boolean {
            if (auth.login({ username: obj.username, password: obj.password })) {
                console.log("username", obj.username);
                dispatch(authActions.login(obj.username));
            }
            else {
                setFlAlert(true);
            }
            return true
        }} ></LoginForm>
        {flAlert && 
            <Collapse in={open}>
                <Alert severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    {ALERT_MESSAGE}
                </Alert>
            </Collapse>
        }
    </Box>    
}