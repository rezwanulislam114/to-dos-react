import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import React from 'react';
import { useHistory } from 'react-router';

const Todo = (props) => {
    const {id, title, completed} = props.todo;
    const history = useHistory();
    const detailHandler =  () => {
        history.push(`/todo-detail/${id}`);
    }
    return (
        <div>
            <Box sx={{background: '#f0f1ff', border: 2, padding: '10px', marginInline: '10px', borderRadius: '6px' }}>
                <Box sx={{display: 'flex', alignItems: 'center', marginBottom: '15px'}}>
                    {completed ? <CheckCircleIcon color="success" sx={{marginRight: '15px'}}/> : <CancelIcon sx={{ color: 'red', marginRight: '15px'}}/>}
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                </Box>
                <Button onClick={detailHandler} variant="contained">see details</Button>
            </Box>
        </div>
    );
};

export default Todo;