const mongoose = require('mongoose')

const CartsSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true,
        trim: true,
        max: 50,
        unique: true
    },
    tiempo:{
        type: Date,
        required: true,
        trim: true,
        max: 50,
        unique: true
    },
    [productos]:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('carritos', CartsSchema )