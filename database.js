/* Open Mongo shell */
mongo

/* Create database called products */
use products_database

/* Create new Collection products */
db.createCollection('products');

/* show collections */
show collections;

/* add items to collection  */
db.products.insertMany([
    {
        id: 13860428,
        cost: 19.99,
        currency: "USD"
    },
    {
        id: 13860429,
        cost: 19.99,
        currency: "USD"
    },
    {
        id: 13860419,
        cost: 11.98,
        currency:"USD"
    },
    {
        id:13860418,
        cost: 20000.00,
        currency:"EUR"
    }
]);



/* get items to collection */
db.products.find().pretty();

/* get an item by id collection */
db.products.find({ id: 13860428 }).pretty();