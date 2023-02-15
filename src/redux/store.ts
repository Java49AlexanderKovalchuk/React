import {configureStore} from "@reduxjs/toolkit"
import { emplReducer } from "./empolyeesSlice"
export const store = configureStore({
    reducer: {
        updateEmpl: emplReducer
    }
})