document.addEventListener("DOMContentLoaded", function() {
    const cartButtons = document.querySelectorAll('.btn-cart');
    const cartBadge = document.querySelector('.cart-badge');
    let count = 0;

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            count++;
            if (cartBadge) {
                cartBadge.textContent = count;
                cartBadge.style.transform = 'scale(1.3)';
                setTimeout(() => cartBadge.style.transform = 'scale(1)', 200);
            }
        });
    });
});
