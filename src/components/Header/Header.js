import { AppBar, IconButton, Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box>
                            <NavLink className="nav-link" activeStyle={{ fontWeight: 'bold', color: 'yellow' }} to="/home">
                                Home
                            </NavLink>
                            <NavLink className="nav-link" activeStyle={{ fontWeight: 'bold', color: 'yellow' }} to="/todos">
                                Todos
                            </NavLink>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Header;