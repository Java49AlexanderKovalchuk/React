import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth-slice";
import { employeesReducer } from "./empolyees-slice";
export const store = configureStore({
    reducer: {
        company: employeesReducer,
        auth: authReducer

    }


})