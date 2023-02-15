import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux"
import { Employee } from "../../model/Employee"
import { Stat, statSalary } from "../EmloyeesService";

export const SalaryStatictics: React.FC = () => {

    const employees: Employee[] = 
        useSelector<any, Employee[]>(state => state.updateEmpl.list);
    function getStat(): JSX.Element {
        if (employees.length === 0) {
            return <Typography>{"No statistics"}</Typography>
        }
        const stat: Stat = statSalary(employees); 
        return <Typography>
            {"Salary statistics: min: " + stat.min + "max :" + stat.max +
            "average :" + stat.avg}
        </Typography>
    }
    return <Box sx={{border: "solid gray 1px"}}>
        {getStat()}
    </Box>
}