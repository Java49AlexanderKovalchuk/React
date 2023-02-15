import { createSlice } from '@reduxjs/toolkit'
import { Employees } from '../components/pages/Employees';
import { Employee } from '../model/Employee';

const empls: Employee[] = [];//defining type of empl
        
const initialState = {
   list: empls    
}
const employeeSlice = createSlice({
    initialState: initialState,
    name: "updateEmpl",
    reducers: {
        addEmployee: (state, data) => {
            const tmp: Employee[] = state.list.slice();
            state.list = tmp;
            tmp.push(data.payload);
        }
    }
})
export const emplAction = employeeSlice.actions;
export const emplReducer = employeeSlice.reducer;