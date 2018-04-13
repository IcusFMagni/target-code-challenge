var express = require('express')
var router = express.Router();
var Item = require('../models/items.schema')
var request = require('request')

router.get('/:id', function (req, res) {
    request({
        uri: "https://redsky.target.com/v2/pdp/tcin/" + req.params.id
    }, function (err, response, body) {
        if (!err && response.statusCode == 200) {
            const item = {
                title: JSON.parse(body).product.item.product_description.title,
                current_price: {}
            }

            Item.find({ id: req.params.id }, function (error, data) {
                if (error) {
                    res.sendStatus(500)
                } else {
                    item.current_price = data;
                }
            })
            res.send(JSON.stringify({ id:req.params.id, name: item.title, current_price:{}}))
        } else {
            res.send(err)
        }
    })
    // Item.find({ _id: req.params.id }, function (errorMakingDatabaseQuery, data) {
    //     if (errorMakingDatabaseQuery) {
    //         console.log('error with details get', errorMakingDatabaseQuery);
    //         res.sendStatus(500)
    //     } else {
    //         console.log(data)
    //         res.send(data);
    //     }
    // })
})

// router.post('/', function (req, res) {
//     console.log('/movie post')
//     var movieToAdd = new Movie(req.body);


//     movieToAdd.save(function (errorMakingDatabaseQuery, data) {
//         if (errorMakingDatabaseQuery) {
//             console.log('error', errorMakingDatabaseQuery);
//             res.sendStatus(500);
//         } else {
//             res.sendStatus(201);
//         }

//     });
// });

module.exports = router;