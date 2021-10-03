import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const TodoDetail = () => {
    const {todoId} = useParams();
    const [todo, setTodo] = useState({});
    const history = useHistory()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(res => res.json())
        .then(data => setTodo(data))
    }, [todoId])
    const {userId, id, title, completed} = todo;
    return (
        <Box sx={{textAlign: 'center'}}>
            <Typography variant="h4" component="h2" sx={{marginTop: '25px'}}>
                Details
            </Typography>
            <h3>UserId: {userId}</h3>
            <h3>Todo Id: {id}</h3>
            <h3>Title: {title}</h3>
            <h3>Completed? {completed ? 'Yes' : 'No'}</h3>
            <Box>
                <Button onClick={() => history.push('/todos')} variant="contained"><ArrowBackIosIcon /> Go Back</Button>
            </Box>
        </Box>
    );
};

export default TodoDetail;