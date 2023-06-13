const getProduct = (id: string) => {
    return fetch(`https://dummyjson.com/products/${id}`).then(response => response.json()).then(data => data);
}

export default getProduct;