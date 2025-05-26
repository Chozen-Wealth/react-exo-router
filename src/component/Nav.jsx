import { Link } from "react-router-dom"
import './Nav.css'


export default function Nav() {
    
    return(
        <>
            <nav>
                <h1>LOGO</h1>
                <ul>
                    <Link to="/"><li>Accueil</li></Link>
                    <Link to="/shop"><li>Shop</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </nav>
        </>
    )
}