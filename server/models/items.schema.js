var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    id: { type: Number, required: true },
    cost: { type: Number, required: true },
    currency: {type: String, required:true, default:"USD"}
});

module.exports = mongoose.model('Item', itemSchema)