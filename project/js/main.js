const data = [
    { title: 'Notebook', id: 1, price: 2000 },
    { title: 'Keyboard', id: 2, price: 200 },
    { title: 'Mouse', id: 3, price: 100 },
    { title: 'Gamepad', id: 4, price: 87 }
];

const renderProduct = (title, id, price) => {
    return `
        <div class="product-item col-lg-4 col-sm-6">
            <div class="productUnit">
                <img src="images/product1.jpg" alt="">
                <div class="productName">
                    ${title}
                </div>
                <div class="productPrice">
                    ${price}
                </div>
            </div>
        </div>
    `;
};

const render = (products) => {
    const productsList = products.map(item => renderProduct(item.title, item.id, item.price));

    document.querySelector('.products').innerHTML = productsList.join('');
};

render(data);