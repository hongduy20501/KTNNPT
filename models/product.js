class Product {
    id
    name
    price
    picture

    constructor({id, name, price, picture}) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.picture = picture;
    }
}

let items = [
    new Product({
        id: 1,
        name: 'Lều',
        price: 123000,
        picture: 'https://images.unsplash.com/photo-1676473094686-c1699a890dde?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzY1MDkzMA&ixlib=rb-4.0.3&q=80&w=300',
    }),
    new Product({
        id: 2,
        name: 'Quần Áo',
        price: 14500,
        picture: 'https://images.unsplash.com/photo-1675789652575-83e22f8003c1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzY1MDk1MQ&ixlib=rb-4.0.3&q=80&w=300',
    }),
    new Product({
        id: 3,
        name: 'Mũ',
        price: 93000,
        picture: 'https://images.unsplash.com/photo-1677508259126-aaa7e0ab008d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzY1MDk3NA&ixlib=rb-4.0.3&q=80&w=300',
    }),
];

while (items.length < 50) {
    items.push(new Product({
        id: items.length,
        name: `Sản phẩm ${items.length}`,
        price: ~~(Math.random() * 100000) + 10000,
        picture: 'https://source.unsplash.com/random/300x300',
    }));
}

const listProducts = () => Array.from(items);

const getProduct = (id) => items.find(item => item.id === id);

const deleteProduct = (id) => {
    const item = getProduct(id);
    if (item) {
        items = items.filter(item => item.id !== id);
        return item;
    }
};

const patchProduct = (id, data) => {
    const item = getProduct(id);
    if (item) {
        Object.assign(item, data);
        return item;
    }
};

module.exports = {
    Product,
    listProducts,
    getProduct,
    deleteProduct,
    patchProduct,
}
