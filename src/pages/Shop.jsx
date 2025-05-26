import Nav from "../component/Nav";
import './style.css'
import data from "../datas/data.json"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



export default function Shop() {
    
    const [produits, setProduits] = useState(null)

    useEffect(()=>{
        setTimeout(()=>{
            setProduits(data)
        }, 1000)
    }, [])

    return(
        <>
            <Nav/>
            <section className="sectionShop">
            <h1>Shop</h1>
                <div className="vitrine">
                    {produits ? (
                        produits.map(element => (
                            <div key={element.id} className="product">
                                <div className="productImg">
                                    <img src={element.image} alt="" />
                                </div>
                                <div className="productInfos">
                                    <div>
                                        <h3 className="productTitle">{element.nom}</h3>
                                        <h3 className="productPrice">{element.prix}€</h3>
                                    </div>
                                    <Link to={`/product/${element.id}`}><button className="productBtn">Details</button></Link>
                                </div>
                            </div>
                        ))
                    ):(<>
                        <div className="product">
                            <div className="productImg">
                                <div className="LoadingImg"></div>
                            </div>
                            <div className="productInfos">
                                <div>
                                    <div className="loadingTitle"></div>
                                    <div className="loadingPrice"></div>
                                </div>
                                <button className="loadingBtn"></button>
                            </div>
                        </div>
                        <div className="product">
                            <div className="productImg">
                                <div className="LoadingImg"></div>
                            </div>
                            <div className="productInfos">
                                <div>
                                    <div className="loadingTitle"></div>
                                    <div className="loadingPrice"></div>
                                </div>
                                <button className="loadingBtn"></button>
                            </div>
                        </div>
                        <div className="product">
                            <div className="productImg">
                                <div className="LoadingImg"></div>
                            </div>
                            <div className="productInfos">
                                <div>
                                    <div className="loadingTitle"></div>
                                    <div className="loadingPrice"></div>
                                </div>
                                <button className="loadingBtn"></button>
                            </div>
                        </div>
                        <div className="product">
                            <div className="productImg">
                                <div className="LoadingImg"></div>
                            </div>
                            <div className="productInfos">
                                <div>
                                    <div className="loadingTitle"></div>
                                    <div className="loadingPrice"></div>
                                </div>
                                <button className="loadingBtn"></button>
                            </div>
                        </div>
                    </>
                    )}
                </div>
            </section>
        </>
    )
}