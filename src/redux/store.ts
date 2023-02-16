import { configureStore } from "@reduxjs/toolkit";
import { employeesReducer } from "./empolyees-slice";
export const store = configureStore({
    reducer: {
        company: employeesReducer
    }
})
