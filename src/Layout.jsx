import { NavBar } from "./Components/NavBar"
import { Outlet } from "react-router-dom"
import { Footer } from "./Components/Footer"

export function Layout(){
    return(
        <>
        <NavBar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}