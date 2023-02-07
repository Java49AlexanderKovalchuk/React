import { authActions } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import React from "react";
import { Input } from "./Input";

type Props = {
    valid: (userName: string) => boolean
}

export const Login: React.FC<Props> = ({valid}) => {
    const [userName, setUserName] = React.useState('');
    const dispatch = useDispatch();
    function getUserName(value: string): string {
        if (valid(value)) {
            setUserName(value);
        }
        return '';
    }
    return <div>
        <Input placeHolder={"Enter username"} inputProcess={getUserName} ></Input>
        <p>username: {userName}</p>
        <button onClick={() => dispatch(authActions.login(userName))}>Login</button>

    </div> 
}