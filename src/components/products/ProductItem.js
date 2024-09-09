import React from "react";
import Button from "../button/Button";

const ProductItem = ({title, description, price, img, duration}) => {
  return (
    <>
        <li className="product__item">
            <figure className="product__item__pic-wrap">
              <img src={img} alt="Travel" className="product__item__img"/>
            </figure>
            <div className="product__item__info">
              <h3 className="product__item__title">{title}</h3>
              <h4 className="product__item__duration">{duration}</h4>
              <p className="product__item__text">{description}</p>
            </div>  
            <div className="product__item__buy">
              <h3 className="product__item__price">${price}</h3>
              <Button buttonStyle="btn--buy" path="/sign-up">Book Now</Button>
            </div>  
        </li>  
    </>
  )
};

export default ProductItem;
