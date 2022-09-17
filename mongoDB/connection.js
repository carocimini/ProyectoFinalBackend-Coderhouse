const mongoose = require('mongoose')
const { MONGO_URL } = require('../config')

const connectDB = async () => {
    try {
        const url = MONGO_URL
        await mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB connected')
    }catch (error) {
        console.log(error)
    }
}

module.exports = connectDB