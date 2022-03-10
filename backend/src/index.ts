import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(express.json())

app.listen(process.env.PORT)
console.log(`app running on port ${process.env.PORT}`)