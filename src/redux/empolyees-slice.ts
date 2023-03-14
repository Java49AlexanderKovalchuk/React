import {createSlice} from '@reduxjs/toolkit';
import { Employee } from '../model/Employee';
import { Company } from '../service/Company';
import { CompanyFirebase } from '../service/CompanyFirebase';
import { codeActions } from './codeSlice';
const company = new CompanyFirebase();
const initialState: {employees: Employee[]} = {
    employees: []
}
const employeesSlice = createSlice({
    initialState,
    name: "company",
    reducers: {
       setEmployees: (state, data) => {
        state.employees = data.payload;
       }
    }
})

export const employeesReducer = employeesSlice.reducer;
const actions = employeesSlice.actions;
export const employeesActions: any = {
    addEmployee : (empl: Employee)=> {
        return async (dispatch: any) => {
            try {
            await company.addEmployee(empl);
            const employees = await company.getAllEmployees();            
            dispatch(actions.setEmployees(employees));
            dispatch(codeActions.setCode("OK"));
            }
            catch(e){
                dispatch(codeActions.setCode("Authorization Error"));
            }
        }
    },
    updateEmployee : (empl: Employee)=> {
        return async (dispatch: any) => {
            try {
            await company.updateEmployee(empl);
            const employees = await company.getAllEmployees();
            
            dispatch(actions.setEmployees(employees));
            dispatch(codeActions.setCode("OK"));
            }
            catch(e){
                dispatch(codeActions.setCode("Authorization Error"));
            }

        }
    },
    removeEmployee : (id: number)=> {
        return async (dispatch: any) => {
            try {
                await company.removeEmployee(id);
                const employees = await company.getAllEmployees();
                dispatch(actions.setEmployees(employees));
                dispatch(codeActions.setCode("OK"));
            } 
            catch (e) {
                dispatch(codeActions.setCode("Authorization Error"));
            }

        }
    },
    getEmployees: ()=> {
        return async (dispatch: any) => {
            try {
                const employees = await company.getAllEmployees();
                dispatch(codeActions.setCode("OK"));
                dispatch(actions.setEmployees(employees));
                
            } catch (e) {
                dispatch(codeActions.setCode("Unknown Error"));
            }
        }
    },
    addBulkEmployees: (employeesAr: Employee[]) => {
        return async (dispatch: any) => {
            try {
                employeesAr.forEach(async (empl) => await company.addEmployee(empl));
                const employees = await company.getAllEmployees();
                dispatch(actions.setEmployees(employees));
                dispatch(codeActions.setCode("OK"));
            } catch (e) {
                dispatch(codeActions.setCode("Authorization Error"));
            }
        }
    }

}