import { authActions } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import React from "react";
import { Input } from "./Input";
export const Login: React.FC= () => {
    const dispatch = useDispatch();
    return <div>
        <h3>Login</h3>
        <Input placeHolder={"Enter username"} inputProcess={function(value: string): string {
            dispatch(authActions.login(value)); 
            return '';
        } }></Input>        
    </div> 
}