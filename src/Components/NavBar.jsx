import { Link } from "react-router-dom"
import { Button } from "./Button"
import './NavBar.css'

export function NavBar() {
    const handleReload = () => {
        window.scrollTo(0, 0)
      };
    return (
        <>
            <div className="nav">
                <Link to="/illustrations" onClick={handleReload} ><Button className="navButton" text="illustrations" size="5vw"/></Link>
                <Link to="/" onClick={handleReload}><div className="homeButton" onTouchStart={() => {}}/></Link>
                <Link to="/commissioninfo" onClick={handleReload}><Button className="navButton" text="commission info" size="5vw"/></Link>
            </div>
        </>
    )
}