const products = [
    {
        id: 1,
        price: 999,
        name: 'key-board',
    },
    {
        id: 2,
        price: 499,
        name: 'mouse',
    },
]

products.filter((product) => {
    product.price < 999
})

collect(products).where('price', '<', 999)
// syntax for collect(takes array.condition)
console.log(collect(products).where('price', '<', 999))