import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import posts from './routers/api/post'

dotenv.config()
const app = express()
const port = process.env.PORT || 3001
app.use(express.json())
app.use(cors())

app.use('/api/posts', posts)

app.listen(port, () => console.log(`Sever started on port ${port}`))