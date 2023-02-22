import React from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Employee } from '../../model/Employee';
import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid';
import './table.css'
import { Delete, Edit } from '@mui/icons-material';
import { employeesActions } from '../../redux/empolyees-slice';

export const Employees: React.FC = () => {
    const auth = useSelector<any, string>(state => state.auth.authenticated);
    const dispatch = useDispatch();
    const columns = React.useRef<GridColumns>([
        {
            field: 'name', headerClassName: 'header', headerName: 'Employee Name',
            flex: 1, headerAlign: 'center', align: "center"
        },
        {
            field: 'birthDate', headerClassName: 'header', headerName: 'Date of Birth',
            flex: 1, type: "date", headerAlign: 'center', align: "center"
        },
        {
            field: 'department', headerClassName: 'header', headerName: 'Department',
            flex: 1, headerAlign: 'center', align: "center"
        },
        {
            field: 'salary', headerClassName: 'header', headerName: 'Salary (NIS)',
            flex: 0.8, type: "number", headerAlign: 'center', align: "center"
        },
        {
            field: 'actions', type: 'actions', getActions: (params) => {
                return auth.includes('admin') ? [
                    <GridActionsCellItem label='remove' icon={<Delete />}
                        onClick={() => dispatch(employeesActions.removeEmployee(+params.id))} />
                    ,
                    <GridActionsCellItem label='update' icon={<Edit />}
                        onClick={() => dispatch(employeesActions.updateEmployee(params))} />
                ] : []
            }
        }
    ])
    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    return <Box sx={{ height: '80vh', width: "80vw" }}>
        <DataGrid columns={columns.current} rows={employees} />
    </Box>
}


