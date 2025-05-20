export function saveReview(review) {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

export function getReviews(productId) {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    if (productId) {
        return reviews.filter(review => review.productId === productId);
    }
}

export function addCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

export function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}