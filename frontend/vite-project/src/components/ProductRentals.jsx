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

export function ProductRentals(){
    const ALL_PRODUCTS_RENTALS = gql`
    query {
        allProductRentals {
            id
            name
            seller
            urlImage
            price
            typeRent
            availability
        }
    }
`
    const {data, loading, error} = useQuery(ALL_PRODUCTS_RENTALS)
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
                {data.allProductRentals.map(product => (
                    <Product key={product.id} name={product.name} urlImage={product.urlImage} price={product.price} idProduct={product.id} typeProduct={'Rentals'}></Product>
                ))}
            </CardProduct>
            :
            <div></div>
        )
        }
        </>
    )
}