import React from "react";
import ProductsList from "../ProductsList";
import "./Products.css";

const Products = () => {

    return (
        <>
            <section className="products">
                <h1>Our Featured Tours</h1>
                <ProductsList/>
            </section>
        </>
    )
}

export default Products;
