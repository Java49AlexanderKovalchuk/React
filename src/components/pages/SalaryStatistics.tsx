import React from 'react';
import {Box} from "@mui/material";
import { statSalary } from '../../service/EmloyeesService';
import {useSelector} from 'react-redux';
import { Employee } from '../../model/Employee';
import { Statistics } from '../Statistics';
export const SalaryStatistics: React.FC = () => {
    const employees = useSelector<any, Employee[]>
    (state => state.company.employees)
    
    function getObjForStatSalary(): {min: number, max: number, avg: number} {
        return {min: statSalary(employees).minSalary, max: statSalary(employees).maxSalary, 
        avg: statSalary(employees).avgSalary};
    }
    
    return <Box>
        <Statistics tableName={'Salary Statistic'} tableRows={getObjForStatSalary()}></Statistics>
    </Box>
}