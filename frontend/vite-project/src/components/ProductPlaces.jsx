import React from "react";
import {gql, useQuery} from "@apollo/client";
import { Product } from "./Product";
import styled from "styled-components";
import { Box } from "@mui/material";

const CardProduct = styled(Box)({
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

export function ProductPlaces(){
    const ALL_PRODUCTS_PLACES = gql`
    query {
        allProductPlaces {
            id
            name
            seller
            urlImage
            price
            location
            availability
        }
    }
`
    const {data, loading, error} = useQuery(ALL_PRODUCTS_PLACES)
    console.log(data)

    if(error){
        return (
            <div>Error al cargar la página</div>
        )
    }

    return (
        <>
        {loading ? <div>Cargando</div> : (
            data ? 
            <CardProduct>
                {data.allProductPlaces.map(product => (
                    <Product key={product.id} name={product.name} urlImage={product.urlImage} price={product.price} idProduct={product.id} typeProduct={'Places'}></Product>
                ))}
            </CardProduct>
            :
            <div></div>
        )
        }
        </>
    )
}