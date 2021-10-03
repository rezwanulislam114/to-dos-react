import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory()
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Typography variant="h3" component="h2" sx={{ textAlign: 'center', margin: '30px' }}>
                404 {<br />} Page Not Found
            </Typography>
            <Button onClick={() => history.push('/home')} variant="outlined">Go Home</Button>
        </Box>
    );
};

export default NotFound;