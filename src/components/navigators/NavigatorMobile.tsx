import React from 'react';
import { NavigatorProps } from '../../model/NavigatorProps';
import { Box, AppBar, Toolbar, Typography, Tab } from '@mui/material';
import { Link, Outlet } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import { useState } from "react";

export const NavigatorMobile: React.FC<NavigatorProps> = ({ routes }) => {

    function getNavItems(routes: { path: string; label: string }[]): React.ReactNode {
        return routes.map((r, index) => <Tab component={Link} to={r.path}
            label={r.label} key={index} onClick={() => {
                setOpenMenu(false);
                setTitle(r.label);
            }} />)
    }

    const [title, setTitle] = useState<string>("Employees' Company");
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const handleMenuClick = () => {
        setOpenMenu(true);
    };

    return (
        <Box>
            <AppBar sx={{}}>
                <Toolbar>
                    <MenuIcon onClick={handleMenuClick} sx={{ color: 'white' }} />
                    <Typography sx={{ width: '100%', textAlign: 'center' }}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer open={openMenu} variant="temporary">
                {getNavItems(routes)}
            </Drawer>
            <Box sx={{ mt: '20vh' }}>
                <Outlet></Outlet>
            </Box>
        </Box>
    );
}

