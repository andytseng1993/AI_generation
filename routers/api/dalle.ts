import express from 'express'
import dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()
const router = express.Router()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

//@router POST /api/dalle
//@desc return a picture
//@access Public
router.post('/', async (req, res) => {
  const { prompt, size } = req.body
  try {
    const aiResponse = await openai.createImage({
      prompt,
      size,
      n: 1,
      response_format: 'b64_json'
    })
    const image = aiResponse.data.data[0].b64_json
    return res.status(200).json({ photo: image })
  } catch (error) {
    return res.status(404).json({ error })
  }
})


export default router