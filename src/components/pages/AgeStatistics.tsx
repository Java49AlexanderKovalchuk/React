import React from 'react';
import { Box } from "@mui/material";
import { statAge } from '../../service/EmloyeesService'
import { Statistics } from '../Statistics';

export const AgeStatistics: React.FC = () => {
    return <Box>
        <Statistics tableName={'Age Statistic'} fnStat={statAge} />
    </Box>
}
