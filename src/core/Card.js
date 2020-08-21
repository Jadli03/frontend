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
            <button className="btn btn-outline-success ml-2 mt-2 mb-2">
              Buy
            </button>

        )
    }

  const showStock = (quantity) => {
        return quantity > 0 ? (
            <span className="badge badge-primary badge-pill"> In Stock</span>
        ) : (
                <span className="badge badge-primary badge-pill">
                    Out of Stock
                </span>);
    };
    return (
        
            
            <div className="card shadow-sm bg-white rounded">
                    <div className="card-header name"><b>{product.name}</b></div>
                    <div className="card-body cr">
                    <Link to={`/product/${product._id}`}>
                        <ShowImage  item={product} url="product" />
                        </Link>
                        {/* <p className=" card-text lead mt2">{product.description.substring(0, 50)}</p> */}
                        <p className="black-10"><b>Price: </b> &#8377; {product.price}</p>
                        <p className="black-9"><b>Category:</b> {product.category && product.category.name}</p>
                        {showStock(product.quantity)}
                        <br />
                        {showViewButton(showViewProductButton)}
                        <a href="https://wa.me/919899822063?text=I'm%20interested%20in%20buying%20your%20product">
                        {showBuyButton()}
                        </a>
                    </div>
                </div> 

    );
};

export default Card;
