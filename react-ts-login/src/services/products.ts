const getProducts = () => {
    return fetch('https://dummyjson.com/products').then(response => response.json()).then(data => data);
}

export default getProducts;