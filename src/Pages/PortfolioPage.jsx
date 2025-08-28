import { useEffect } from "react"
import { Images } from "../Components/Images.jsx"

export function PortfolioPage() {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[]);
    return (
        <>
        <p className="introText">here are some examples of my work !</p>
            <Images/>
        </>
    )
}