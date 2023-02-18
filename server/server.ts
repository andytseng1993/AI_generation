import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import posts from './routers/api/post'
import dalle from './routers/api/dalle'
dotenv.config()
const app = express()
const port = process.env.PORT || 3001
app.use(express.json({ limit: '5mb' }))
app.use(cors())

app.use('/api/posts', posts)
app.use('/api/dalle', dalle)

app.listen(port, () => console.log(`Sever started on port ${port}`))