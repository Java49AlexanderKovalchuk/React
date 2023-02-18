import { Box, Typography } from '@mui/material';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import React from 'react';

type TableProps = {
    tableName: string;
    tableRows: { min: number, max: number, avg: number }
}
export const Statistics: React.FC<TableProps> = (props) => {
    const columns = React.useRef<GridColumns>([
        {
            field: 'min', headerName: 'Minimal Value', flex: 1, type: 'number',
            headerAlign: 'center', align: 'center'
        },
        {
            field: 'max', headerName: 'Maximal Value', flex: 1, type: 'number',
            headerAlign: 'center', align: 'center'
        },
        {
            field: 'avg', headerName: 'Average Value', flex: 1, type: 'number',
            headerAlign: 'center', align: 'center'
        }
    ])
    function getRows(): { id: number, min: number, max: number, avg: number }[] {
        return [{ id: 0, ...props.tableRows }];
    }
    return <Box sx={{ width: '50vw', height: '30vh', textAlign: 'center' }}>
        <Typography>{props.tableName}</Typography>
        <DataGrid columns={columns.current} rows={getRows()} />
    </Box>

}