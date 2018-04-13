/* Open Mongo shell */
mongo

/* Create database called products */
use products_database

/* Create new Collection products */
db.createCollection('products');

/* show collections */
show collections;

/* add movies to collection */
db.item.insert({
    title: 'Star Wars: A New Hope',
    urlOfPic: '../images/Star_Wars_A_New_Hope.jpeg',
    description: 'The Imperial Forces, under orders from cruel Darth Vader, hold Princess Leia hostage in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker and Han Solo, captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 and C-3PO to rescue the beautiful princess, help the Rebel Alliance and restore freedom and justice to the Galaxy.',
    rating: 3
});



/* get movies to collection */
db.products.find().pretty();

/* get a movie by title collection */
db.products.find({title: 'Star Wars: A New Hope'}).pretty();