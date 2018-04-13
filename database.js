/* Open Mongo shell */
mongo

/* Create database called products */
use products_database

/* Create new Collection products */
db.createCollection('products');

/* show collections */
show collections;

/* add items to collection  */
db.products.insert({
    id: 13860428, 
    cost: 19.99,
    currency: "USD"
});



/* get items to collection */
db.products.find().pretty();

/* get an item by id collection */
db.products.find({id: 13860428}).pretty();