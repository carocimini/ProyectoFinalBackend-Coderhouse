const { MONGO_URL, FIREBASE } = require('../config.js')

export default {
    fileSystem: {
        path: './ArchivosDB'
    },
    mongodb: {
        cnxStr: MONGO_URL,
        options:{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000
        }
    },
    firebase:{
        firekey: FIREBASE},

}