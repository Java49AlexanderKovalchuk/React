import { Box, Typography } from "@mui/material";
import React from "react";
import { NavigatorProps } from "../../model/NavigatorProps";
export const NavigatorMobile: React.FC<NavigatorProps> = ({routes}) => {
    //TODO Navigator based on Drawer
    return <Box>
        {routes.map(r => <Typography>{JSON.stringify(r)}</Typography>)};
    </Box>
}