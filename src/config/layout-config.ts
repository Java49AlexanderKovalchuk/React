import { NavigatorProps } from "../model/NavigatorProps";
import { useSelector } from "react-redux";

//let auth: string = useSelector<any, string> (state => state.auth.authenticated);
//let auth = false;

export const layoutConfig: NavigatorProps = {
    routes: [
        { label: 'Employees', path: '/', flAdmin: false, flAuth: true },
        { label: 'Add Employees', path: '/add', flAdmin: true, flAuth: true },
        { label: 'Age Statistics', path: '/statistics/age' , flAdmin: false, flAuth: true},
        { label: 'Salary Statistics', path: '/statistics/salary', flAdmin: false, flAuth:true},
        { label: 'Login', path: '/login', flAdmin: false, flAuth: true},
        { label: 'Logout', path: '/logout', flAdmin: true, flAuth:true}
    ]
}
