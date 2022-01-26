import React, { useEffect, useState } from "react";
import api from "../api";
import ProductItem from "./ProductItem";

const ProductsList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get("products").then(setProducts);
    }, []);

    return (
        <>
            <div className="products__container">
                <div className="products__wrapper">
                    <ul className="products__items">
                        {products.map((product) => (
                            <ProductItem 
                                key={product.id}
                                title={product.title}
                                description={product.description}
                                duration={product.duration}
                                price={product.price}
                                img={product.img}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ProductsList;
