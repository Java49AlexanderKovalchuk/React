import React from 'react';
import { useMediaQuery, Box} from '@mui/material';
import { NavigatorProps } from '../../model/NavigatorProps';
import { NavigatorMobile } from './NavigatorMobile';
import { Navigator } from './Navigator';
export const NavigatorDispatch: React.FC<NavigatorProps> = ({ routes }) => {
    const noMobile: boolean = useMediaQuery('(min-width:900px)');
    return <Box> 
       {noMobile ? <Navigator routes={routes} /> : <NavigatorMobile routes={routes} />} 
    </Box>
}