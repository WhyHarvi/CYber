import './ProductPage.css';


function ProductPage({ product }) {
    return (
        <div className="product-page">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
                <h1>{product.name}</h1>
                <p className="price">${product.price}</p>
                <p className="description">{product.description}</p>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    );
}


export default ProductPage;