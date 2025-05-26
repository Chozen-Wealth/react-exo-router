import { Link } from "react-router-dom";
import Nav from "../component/Nav";
import './style.css'


export default function Home() {
    
    return(
        <>
            <Nav/>
            <section className="home">
                <h1>JUST DO IT</h1>
                   <Link to="/shop"><button>Découvrir Nos Paires</button></Link>
            </section>
        </>
    )
}