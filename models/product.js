const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field required!']
    },
    code: {
        type: String
    },
    price: {
        type: Number,
        default: false
    },
    creator: {
        type: String
    },
    modified: {
        type: String
    }
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;