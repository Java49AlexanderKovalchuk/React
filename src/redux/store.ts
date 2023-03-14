import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth-slice";
import { employeesReducer } from "./empolyees-slice";
import { codeReducer } from "./codeSlice";
export const store = configureStore({
    reducer: {
        company: employeesReducer,
        auth: authReducer,
        errorCode: codeReducer
    }

})