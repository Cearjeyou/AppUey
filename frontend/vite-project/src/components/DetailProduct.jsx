import React from "react";
import { useParams } from "react-router-dom";
import {gql, useQuery} from "@apollo/client"
import { Cases } from "@mui/icons-material";
import { Box } from "@mui/material";


function selectQuery(typeProduct) {
    switch(typeProduct) {
        case 'Simples':
            return gql`
            query($id: ID!) {
                findByIdSimpleProduct(id: $id) {
                    id
                    name
                    seller
                    urlImage
                    price
                    stock
                        }
                    }
            `
            break;
        case 'Rentals':
            return gql`
                query($id: ID!) {
                    findByIdRentalProduct(id: $id) {
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
            break;
        case 'Places':
            return gql`
                query($id: ID!) {
                    findByIdPlaceProduct(id: $id) {
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
            break;
        default:
            throw new Error('Bad request')
        }
}

function selectData(typeProduct, data){
    switch(typeProduct){
        case 'Simples':
            return data?.findByIdSimpleProduct
            break;
        case 'Rentals':
            return data?.findByIdRentalProduct
            break;
        case 'Places':
            return data?.findByIdPlaceProduct
            break;
        default:
            return undefined
    }
}

export function DetailProduct(){
    const {typeProduct,id} = useParams()
    
    
    const findProduct = selectQuery(typeProduct)
    const {data, loading, error} = useQuery(findProduct, {variables: {id}})
    const product = selectData(typeProduct, data)
    
    return (
        <>
        {data ? 
        <Box sx={{textAlign: 'center'}}>
            <h1>{product.name}</h1>
            <img src={product.urlImage} alt="imagen-producto" />
            <p>Vendedor: {product.seller}</p>
            <p>Precio: {product.price} COP</p>
            {product.stock && <p>Unidades disponibles: {product.stock}</p>}
            {product.typeRent && <p>Renta: por {product.typeRent}</p>}
            {product.location && <p>Ubicación: {product.location}</p>}
            {product.availability && <p>Disponible: {product.availability ? 'Si' : 'No'}</p>}

        </Box>
    : <div>Cargando</div>}
        
        </>
    )
}