import { Box, Card, CardHeader, CardMedia} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardCategory = styled(Box)({
    display: 'grid',
    boxSizing: 'border-box',
    width: '100vw',
    gap: '2.7rem',
    gridAutoFlow: 'dense',
    gridAutoRows: '25rem',
    gridTemplateColumns: 'repeat(3, minmax(min(100%, 20vw), 8fr))',
    padding: '1rem 2rem',
    textAlign: 'center',
})

export function Category(){

    const categoryProducts = [
        {
            name: "Productos",
            path: "/Simples"
        },
        {
            name: "Implementos",
            path: "/Rentals"
        },
        {
            name: "Espacios",
            path: "/Places"
        }
    ]

    return (
        <CardCategory>
            {categoryProducts.map(category => (
                <Link key={category.name} to={`/product${category.path}`}>
                    <Card>
                        <CardHeader
                        title={category.name}
                        />
                        <CardMedia
                        component="img"
                        image="https://images.unsplash.com/photo-1609263842618-006cd27e5431?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                        alt={`img-${category.name}`}
                        />
                    </Card>
                </Link>
            ))}
        </CardCategory>
    )
}