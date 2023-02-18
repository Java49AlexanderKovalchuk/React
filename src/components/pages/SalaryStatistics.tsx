import React from 'react';
import {Box} from "@mui/material";
import { statSalary } from '../../service/EmloyeesService';
import { Statistics } from '../Statistics';

export const SalaryStatistics: React.FC = () => {
    return <Box>
        <Statistics tableName={'Salary Statistic'} fnStat={statSalary}></Statistics>
    </Box>
}