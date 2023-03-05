import React, { useEffect } from 'react';
import { NavigatorProps } from '../../model/NavigatorProps';
import {
    Box, Button, AppBar, Toolbar, Typography, Divider,
    Tab,
} from '@mui/material';
import { Link, Outlet, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'
import { Drawer } from '@mui/material';
import { useState } from "react";
import { useNavigate } from 'react-router';


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


    const handleCloseClick = () => {
        setOpenMenu(false);
    };

    const handleMenuClick = () => {
        setOpenMenu(true);
    };

    return (
        <Box>
            <AppBar sx={{}}>
                <Toolbar>
                    <Button onClick={handleMenuClick}>
                        <MenuIcon sx={{ color: 'white' }} />
                    </Button>
                    <Typography sx={{ width: '100%', textAlign: 'center' }}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            
            <Drawer open={openMenu} variant="temporary">
                {getNavItems(routes)}
            </Drawer>

            <Box sx={{mt:'20vh'}}>
                <Outlet></Outlet>
            </Box>
        </Box>
    );

}

