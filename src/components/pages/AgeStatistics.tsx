import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { Employee } from "../../model/Employee"
import { statAge } from "../EmloyeesService";

export const ageStatistics: React.FC = () {
    
    const employees: Employee[] = 
        useSelector<any, Employee[]>(state => state.updateEmpl.list);
        
    function getStat(): JSX.Element {
        if(employees.length === 0) {
            return <Typography>{"no statistics"}</Typography> 
        }
        const stat: Stat = statAge(employees);
        return <Typography>
            {"Age statistics: min :" + stat.min + "max :" + stat.max + "min: "
            + stat.min + "average" + stat.avg}
        </Typography>
    }

    return <Box sx={{border: "solid gray 1px"}}>
        {getStat()}
    </Box>
}