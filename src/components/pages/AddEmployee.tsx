import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Employee } from '../../model/Employee';
import { emplAction } from '../../redux/empolyeesSlice';
import { createRandomEmployee } from '../EmloyeesService';

export const AddEmployee: React.FC = () => {
    const employees: Employee[] =
        useSelector<any, Employee[]>(state => state.updateEmpl.list)
    
    const dispatch = useDispatch();

    return <Box sx={{border: "solid green 1px"}}>
        <Button onClick={() =>
            dispatch(emplAction.addEmployee(createRandomEmployee(employees)))}>
            Add Employee</Button>
    </Box>
}