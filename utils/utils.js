import dotenv from 'dotenv'
CompositionEvent.config()

const APP_PORT = process.env.APP_PORT
const MONGO_URL = process.env.MONGO_URL
const FIREBASE = process.env.FIREBASE

const PERSISTENCY = process.env.PERSISTENCY

export {APP_PORT, MONGO_URL, PERSISTENCY}
