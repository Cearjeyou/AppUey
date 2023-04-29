import React from "react";

import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import styled from "styled-components";


const BoxFooter = styled(Box)({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#1976d2',
    paddingLeft: '1rem',
    color: 'white',
    fontSize: '1.5rem',
    span: {
        fontSize: '1rem'
    },
    a: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '1rem'
    },
})



export function Footer(){
    return (
        <BoxFooter >
            <h3>Uey <span>Todos los derechos reservados</span></h3>
            <a href="#">Terminos y condiciones</a>
            <a href="#"><FacebookIcon /></a>
            <a href="#"><InstagramIcon /></a>
            <a href="#"><TwitterIcon /></a>
        </BoxFooter>
    )
}