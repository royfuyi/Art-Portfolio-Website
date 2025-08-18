import { Link } from "react-router-dom"
import { Button } from "./Button"
import './NavBar.css'

export function NavBar() {
    return (
        <>
            <div className="nav">
                <Link to="/illustrations"><Button className="navButton" text="illustrations" size="5vw"/></Link>
                <Link to="/"><div className="homeButton"/></Link>
                <Link to="/commissioninfo"><Button className="navButton" text="commission info" size="5vw"/></Link>
            </div>
        </>
    )
}