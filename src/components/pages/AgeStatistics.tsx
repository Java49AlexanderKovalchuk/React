import React from 'react';
import {Box} from "@mui/material";
import { statAge } from '../../service/EmloyeesService'
import {useSelector} from 'react-redux';
import { Employee } from '../../model/Employee';
import { Statistics } from '../Statistics';


export const AgeStatistics: React.FC = () => {
    const employees: Employee[] = useSelector<any, Employee[]>(state => 
        state.company.employees);

function getObjForStatAge(): {min: number, max: number, avg: number} {
    return {min: statAge(employees).minAge, max: statAge(employees).maxAge, 
    avg: statAge(employees).avgAge};
}
        
    return <Box>
        <Statistics tableName={'Age Statistic'} tableRows= {getObjForStatAge()}/>
    </Box>
}
