
import { Box, List, ListItem } from "@mui/material";
import { useSelector } from "react-redux"
import { Employee } from "../../model/Employee";

export const Employees: React.FC = () => {
    const empls = useSelector<any, Employee[]>(state => state.updateEmpl.list);
    function getListEmpl(): JSX.Element[] {
        return empls.map(el => <ListItem sx={{ border: "solid gray 1px" }}>{`id: ${el.id},
            name: ${el.name}, birthdate: ${el.birthDate}, department: ${el.department}, 
            salary: ${el.salary}`}</ListItem>);
    }
    return <Box sx={{border: "solid gray 1px"}}>
        <List>        
            {getListEmpl()}
        </List>
    </Box>
}

