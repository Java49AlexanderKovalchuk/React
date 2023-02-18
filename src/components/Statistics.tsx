import { Box, Typography } from '@mui/material';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import React from 'react';
import { useSelector } from 'react-redux';
import { Employee } from '../model/Employee';

type TableProps = {
    tableName: string;
    fnStat: (empl: Employee[]) => { min: number, max: number, avg: number };
}

export const Statistics: React.FC<TableProps> = (props) => {
    const columns = React.useRef<GridColumns>([
        {
            field: 'min', headerName: 'Minimal Value', flex: 1, type: 'number',
            headerAlign: 'center', align: 'center'
        },
        {
            field: 'max', headerName: 'Maximal Value', flex: 1, type: 'number',
            headerAlign: 'center', align: 'center'
        },
        {
            field: 'avg', headerName: 'Average Value', flex: 1, type: 'number',
            headerAlign: 'center', align: 'center'
        }
    ])

    const employees: Employee[] = useSelector<any, Employee[]>
        (state => state.company.employees);

    function getRows(): {id: number,
         min: number|string, max: number|string, avg: number|string}[] {
        return (employees[0]) ? [{ id: 0, ...props.fnStat(employees) }] :
            [{ id: 0, min: "no emloyees", max: "no employees", avg: "no employees" }];
    }

    return <Box sx={{ width: '50vw', height: '80vh', textAlign: 'center' }}>
        <Typography>{props.tableName}</Typography>
        <DataGrid columns={columns.current} rows={getRows()} />
    </Box>
}