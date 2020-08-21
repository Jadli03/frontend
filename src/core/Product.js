import React, { useState, useEffect } from 'react';
import { read, listRelated } from './apiCore';
import Menu from './Menu';
import DetailProductImg from './DetailProductImg';
const Product = props => {
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [setError] = useState(false);
    
    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setRelatedProduct(data);
                    }
                });
            }
        });
    };
    
    const showStock = (quantity) => {
        return quantity > 0 ? (
            <span className="badge badge-primary badge-pill"> In Stock</span>
        ) : (
                <span className="badge badge-primary badge-pill">
                    Out of Stock
                </span>);
    };

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);

    return (
                <div>
                    <Menu />
<div className="container mt-5 pt-5 ">
		<div className="card product-card">
			<div className="container">
				<div className="wrapper row mt-4">
					<div className="preview col-md-6">
						  
						<div className="preview-pic tab-content">
                        <DetailProductImg className="tab-pane active" id="pic-1" item={product} url="product" />
						</div>
						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{product.name}</h3>
                        <p className="black-9">Category: {product.category && product.category.name}</p>
                        {/* <h4>Description</h4><br/> */}
						<p className="product-description"><b>Description: </b><br/>{product.description}</p>
						<h4 className="price">Price: <span>&#8377; {product.price}</span></h4>
                        <div className="mb-2">
                        {showStock(product.quantity)}
                        </div>
						<div className="action">
                        <a href="https://wa.me/919899822063?text=I'm%20interested%20in%20buying%20your%20product">
							<button className=" btn btn-outline-success mb-3" type="button">Buy Now</button>
                            </a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
      
    );
};

export default Product;