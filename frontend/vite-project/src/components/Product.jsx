import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkProduct = styled(Link)({
    display: 'block'
})

export function Product(props){
    const {name, urlImage, price, idProduct, typeProduct} = props

    return (
        <LinkProduct to={`/product/detail/${typeProduct}/${idProduct}`}>
            <Box>
                <Card>
                    <CardHeader
                    title={name}
                    />
                    <CardMedia
                        component="img"
                        image={urlImage}
                        alt={`img-${name}`}
                    />
                    <CardContent>
                        <Typography>
                            Precio: ${price}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </LinkProduct>
    )
}