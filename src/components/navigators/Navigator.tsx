import { AppBar, Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

import './navigators.css'



export const Navigator: React.FC<NavigatorProps> = ({ className, routes }) => {
    const [tabNumber, setTubNumber] = React.useState(0);
    function changeTubNumber(event: any, newNumber: number) {
        setTubNumber(newNumber);
    }
    return <Box sx={{marginTop: '15vh'}}>
        <AppBar sx={{backgroundColor: 'lightgrey'}}>
            <Tabs value={tabNumber} onChange={changeTubNumber}>
                {getNavItems(routes)}
            </Tabs>
        </AppBar>
        <Outlet></Outlet>
    </Box>
    

}
function getNavItems(routes: { path: string, label: string }[]): React.ReactNode {
    return routes.map((r, index) => <Tab component={Link} to={r.path}
        label={r.label} key={index} />)
}
function activeLink(isActive: boolean): React.CSSProperties {
    let res: React.CSSProperties = {};
    if (isActive) {
        res = { backgroundColor: "blue", color: "white", fontSize: '1.2em' };
    }
    return res;
}

