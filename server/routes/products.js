var express = require('express')
var router = express.Router();
var Item = require('../models/items.schema')
var request = require('request')

router.get('/:id', function (req, res) {
    //Finds the product on Redsky to retrieve it's name.
    request({
        uri: "https://redsky.target.com/v2/pdp/tcin/" + req.params.id
    }, function (err, response, body) {
        if (!err && response.statusCode == 200) {
            let item = {
                title: JSON.parse(body).product.item.product_description.title}

                //Finds the price on seperate Database
            Item.findOne({ id: req.params.id }, function (error, data) {
                if (error) {
                    res.sendStatus(500)
                } else {
                    item.cost = data.cost
                    item.currency = data.currency
                    res.send(JSON.stringify({ id: req.params.id, name: item.title, cost: item.cost, currency: item.currency }))
                }
            })
        } else {
            res.send(err)
        }
    })
})




router.put('/:id', function (req, res) {
    Item.findOneAndUpdate({id: req.params.id},{cost: req.body.price}, function (error, data) {
        if (error) {
            res.sendStatus(500)
        }else {
            res.sendStatus(200)
        }
    })
})

module.exports = router;