const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sell = new Schema({
    user: {
        type: String,
    },
    product: {
        type: String,
    },
    description: { 
        type: String,
    },
    quantity: {
        type: Number,

    },
    price: {
        type: Number,
    },
});
module.exports = mongoose.model('Sell', sell);
