import { useParams } from "react-router-dom";
import Nav from "../component/Nav";
import './style.css'
import data from "../datas/data.json"

export default function Details() {

    const {id} = useParams()

    const produit = data.find(element => element.id === parseInt(id))

    return(
        <>
            <Nav />
            <section className="sectionShop">
                <div className="showProduct">
                    <img src={produit.image} alt="" />
                    <div className="showInfos">
                        <span className="showTitle">{produit.nom}</span>
                        <span className="showDescription">{produit.description}</span>
                        <span className="showPrix">{produit.prix}€</span>
                        <button className="showBtn">Acheter</button>
                    </div>
                </div>
            </section>
        </>
    )
}