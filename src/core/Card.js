import React from 'react';
import { Link } from 'react-router-dom';
import ShowImage from './ShowImage';
const Card = ({ product, showViewProductButton = true }) => {
    const showViewButton = (showViewProductButton) => {
        return (
            showViewProductButton && (
                <Link to={`/product/${product._id}`} className="mr-2">
                    <button className="btn btn-outline-primary mt-2 mb-2 mr-2">
                        View Product
            </button>
                </Link>

            )
        );

    };

    const showBuyButton = () => {
        return (
        <button className="btn btn-outline-warning mt-2 mb-2">
            Buy
        </button>

        )
    }

    const showStock =(quantity)=>{
        return quantity > 0 ?(
             <span className="badge badge-primary badge-pill"> In Stock</span>
        ):(
            <span className="badge badge-primary badge-pill">
            Out of Stock 
        </span> );  };
    return (

        <div className="card">
            <div className="card-header name">{product.name}</div>
            <div className="card-body">
                <ShowImage item={product} url="product" />
                <p className="lead mt2">{product.description.substring(0, 50)}</p>
                <p className="black-10"> &#8377; {product.price}</p>
                <p className="black-9">Category: {product.category && product.category.name}</p>
                {showStock(product.quantity)}
                <br />
                {showViewButton(showViewProductButton)}
                {showBuyButton()}
            </div>
        </div>

    );
};

export default Card;