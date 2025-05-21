import './ProductPage.css';
import { useParams } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { saveReview, getReviews, addCart } from '../../Services/LocalStorage';
import { useNavigate } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import Stars from '../Stars/Stars';
import { ToastContainer, Zoom, toast } from 'react-toastify';


function ProductPage({ products }) {

    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id));

    const [reviews, setReviews] = useState(getReviews(product.id));
    const [rating, setRating] = useState(0);
    const textareaRef = useRef();
    const navigate = useNavigate();

    const notify = (msg) => toast.success(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
    });

    // Scroll to top on page load
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);


    function submit() {
        var review = {
            productId: product.id,
            rating: rating,
            date: new Date().toLocaleDateString(),
            content: textareaRef.current.value,
            author: 'Anonymous'
        };

        if (review.content) {
            saveReview(review);
            textareaRef.current.value = '';
            setReviews(getReviews(product.id));
        } else {
            toast.warn('Please input review!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
        }
    }

    function addToCart() {
        addCart(product);
        notify('The product has been added to the cart.');
    }

    function goToCart() {
        navigate('/cart')
    }


    return (
        <div className="container">
            <nav className='nav' aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a className='nav-link' href="/">Home</a></li>
                    <li className="breadcrumb-item breadcrumb-item-end active" aria-current="page">Product</li>
                </ol>
            </nav>

            <ToastContainer />

            <div className="row">
                <div className='col-5'>
                    <img src={product.image} alt={product.name} className="product-image" />
                </div>

                <div className='col-7'>
                    <h1 className="product-name">{product.name}</h1>
                    <h2 className="product-price">${product.price}</h2>

                    <div className="flex-container">
                        <div className='row product-panel'>
                            <i className="bi bi-phone-fill col-1 icon-size"></i>
                            <div className='col product-panel-text'>
                                <div>Screen Size: </div>
                                <span className="product-text-value">{ product.ScreenSize }</span>
                            </div>
                        </div>

                        <div className='row product-panel'>
                            <i className="bi bi-cpu col-1 icon-size"></i>
                            <div className='col product-panel-text'>
                                <div>CPU: </div>
                                <span className="product-text-value">{ product.Cpu }</span>
                            </div>
                        </div>

                        <div className='row product-panel'>
                            <i className="bi bi-device-ssd col-1 icon-size"></i>
                            <div className='col product-panel-text'>
                                <div>Ram: </div>
                                <span className="product-text-value">{ product.Ram }</span>
                            </div>
                        </div>

                    </div>

                    <div className="flex-container mb-3">
                        <div className='row product-panel'>
                            <i className="bi bi-camera col-1 icon-size"></i>
                            <div className='col product-panel-text'>
                                <div>Main camera: </div>
                                <span className="product-text-value">{ product.Camera }</span>
                            </div>
                        </div>

                        <div className='row product-panel'>
                            <i className="bi bi-bullseye col-1 icon-size"></i>
                            <div className='col product-panel-text'>
                                <div>Front-Camera: </div>
                                <span className="product-text-value">{ product.FrontCamera }</span>
                            </div>
                        </div>

                        <div className='row product-panel'>
                            <i className="bi bi-battery-full col-1 icon-size"></i>
                            <div className='col product-panel-text'>
                                <div>Battery: </div>
                                <span className="product-text-value">{ product.Battery }</span>
                            </div>
                        </div>

                    </div>


                    <p className="product-description">{product.Description}</p>

                    <button onClick={addToCart} className="btn add-button">Add to Cart</button>
                    <button onClick={goToCart} className="btn cart-button">Go to Cart</button>

                    <div className="flex-container mt-3">
                        <div className="flex-container2 service-panel">
                            <div className="service-icon">
                                <i className="bi bi-truck"></i>
                            </div>

                            <div className="service-text">
                                <div className='service-text-value'>Free Delivery</div>
                                <div>1-2 day</div>
                            </div>
                        </div>

                        <div className="flex-container2 service-panel">
                            <div className="service-icon">
                                <i className="bi bi-house"></i>
                            </div>

                            <div className="service-text">
                                <div className='service-text-value'>In Stock</div>
                                <div>Today</div>
                            </div>
                        </div>

                        <div className="flex-container2 service-panel">
                            <div className="service-icon">
                                <i className="bi bi-shield-lock"></i>
                            </div>

                            <div className="service-text">
                                <div className='service-text-value'>Guaranteed</div>
                                <div>1 year</div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

            <div className='product-details'>
                <h5>Details</h5>

                <table className="table table-striped mb-5">
                    <thead>
                        <tr>
                            <th scope="col">Feature</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Screen Size</td>
                            <td>{product.ScreenSize}</td>
                        </tr>
                        <tr>
                            <td>CPU</td>
                            <td>{product.Cpu}</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>{product.Ram}</td>
                        </tr>
                        <tr>
                            <td>Main Camera</td>
                            <td>{product.Camera}</td>
                        </tr>
                        <tr>
                            <td>Front Camera</td>
                            <td>{product.FrontCamera}</td>
                        </tr>
                        <tr>
                            <td>Battery</td>
                            <td>{product.Battery}</td>
                        </tr>

                    </tbody>

                </table>

                <p className='mb-5'>{product.Description}</p>
            </div>

            <div className="product-reviews mb-5">
                <h5 className='mb-4'>Reviews</h5> 
                
                <StarRating value={rating} onChange={setRating} />

                {/* input review */}

                <div className="review-input mb-5 mt-3">
                    <textarea ref={textareaRef} className="form-control" rows="3" placeholder="Write your review here..."></textarea>
                    <div>
                        
                    </div>

                    <button className="btn btn-primary mt-3" onClick={submit}>Submit Review</button>
                </div>

                {/* review list */}

                {
                    reviews && (
                        reviews.length === 0 ? (
                            <div className="no-reviews">
                                <p>No reviews yet. Be the first to review this product!</p>
                            </div>
                        ) : (
                            reviews.map((review, index) => (
                                <div className="review" key={index}>
                                    
                                    <div className="review-text mb-3">
                                        {review.content}
                                    </div>
                                    <div className="review-author">
                                        - <span className='author'>{ review.author || 'Anonymous' }</span> 
                                        <Stars value={review.rating} />
                                        <span className='review-date'> { review.date }</span>
                                    </div>
                                </div>
                            ))
                        )
                    )
                }

            </div>


        </div>

    );
}


export default ProductPage;