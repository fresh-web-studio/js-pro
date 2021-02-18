class Products {
    data = [];
    products = [];
    container = null;

    constructor(selector) {
        this.container = document.querySelector(selector);
        this._fetchData();
        this._render();
        this._sumProducts();
    }

    _fetchData() {
        this.data = [
            { title: 'Notebook', id: 1, price: 2000 },
            { title: 'Keyboard', id: 2, price: 200 },
            { title: 'Mouse', id: 3, price: 100 },
            { title: 'Gamepad', id: 4, price: 87 }
        ];
    }

    //Метод определяющий суммарную стоимость всех товаров
    _sumProducts() {
        let sum = 0;

        this.products.forEach(product => {
            sum += product.price;
            });
    }

    _render() {
        for (let data of this.data) {
            const product = new ProductItem(data);
            this.products.push(product);
            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }
}

class ProductItem {
    title = '';
    price = 0;
    id = 0;
    img = '';

    constructor(product, img = 'https://placehold.it/200x150') {
        ({ title: this.title, price: this.price, id: this.id } = product);
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}

class Cart {
    // dataCart - массив всех объектов товаров в корзине
    // productsCart - массив данных всех нужных товаров в корзине
    // containerCart - контейнер для добавления нужных товаров корзины

    //_fetchDataCart() - выполняет запрос для получение данных для товаров
    //_renderCart() - добавление всех элементов корзины товаров, метод находит нужный селектор, добавляет выбранный товар в этот селектор
}
class CartItem {
    // productsCart - массив товара со свойствами товара

    // constructorCart() - метод собирает свойства товаров
    // renderCart() выводит товары по заданному шаблону
}

const list = new Products('.products');
