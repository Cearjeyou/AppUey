import React from "react";

import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import { useNavigate } from "react-router-dom";


export function Header(){
    const navigate = useNavigate()
    const menuNavbar = [
        {
            name: "Inicio",
            path: "/categories"
        },
        {
            name: "Quiénes somos",
            path: "/categories"
        },
        {
            name: "Contactanos",
            path: "/categories"
        }
    ]

    const handleClick = () => {
        navigate("/categories")
    }

    return (
        <AppBar position="static" sx={{width: '100vw' }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters sx={{textAlign: 'center'}}>
                    <img src={"/public/uey.png"} alt="Logo-Empresa"></img>
                    <h1>Uey! Productos a tu alcance</h1>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                        size="large"
                        aria-controls="menu-appbar"
                        aria-label="navbar"
                        aria-haspopup= "true"
                        color="red"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        sx={{display: {xs: 'block', md: 'none'},}}
                        >
                            {menuNavbar.map(itemMenu => (
                                <MenuItem key={itemMenu}>
                                    <Typography textAlign="center">{itemMenu}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex', justifyContent: 'space-evenly'}}}>
                        {menuNavbar.map(itemMenu => (
                            <Button key={itemMenu.name} sx={{my: 2, color: 'black', display: 'block'}} onClick={handleClick}>{itemMenu.name}</Button>
                            ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}