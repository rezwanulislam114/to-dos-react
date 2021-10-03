import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, []);

    return (
        <div>
            <Typography variant="h3" component="h2" sx={{textAlign: 'center', margin: '30px'}}>
                This is ToDos list. Check what you did already!
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1 }}>
                {
                    todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)
                }
            </Box>
        </div>
    );
};

export default Todos;