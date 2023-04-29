import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export function Home(){
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/categories")
    }, [])
    
    return (
        <>
        <header>
            <Header></Header>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
        </>
    )
}
