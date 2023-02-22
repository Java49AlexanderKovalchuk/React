import { configureStore } from "@reduxjs/toolkit";
import { employeesReducer } from "./empolyees-slice";
import {authReducer} from './auth-slice';
export const store = configureStore({
    reducer: {
        company: employeesReducer,
        auth: authReducer
    }
})
