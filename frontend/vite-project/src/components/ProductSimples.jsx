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

const ALL_PRODUCTS_SIMPLES = gql`
    query {
        allProductSimples {
            id
            name
            seller
            urlImage
            price
            stock
        }
    }
`

export function ProductSimples(){
    
    const {data, loading, error} = useQuery(ALL_PRODUCTS_SIMPLES)
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
                {data.allProductSimples.map(product => (
                    <Product key={product.id} name={product.name} urlImage={product.urlImage} price={product.price} idProduct={product.id} typeProduct={'Simples'}></Product>
                ))}
            </CardProduct>
            :
            <div></div>
        )
        }
        </>
    )
}