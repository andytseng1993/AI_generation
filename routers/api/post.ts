import { PrismaClient } from '@prisma/client'
import express from 'express'
import { Buffer } from 'buffer'

const prisma = new PrismaClient()
const router = express.Router()

//@router GET /api/posts
//@desc return all posts
//@access Public
router.get('/', async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        name: true,
        prompt: true,
        image: true
      }
    })
    const _post = posts.map((post) => {
      return {
        ...post,
        image: post.image.toString('base64')
      }
    })
    return res.status(200).json(_post)
  } catch (error) {
    return res.status(404).json({ error })
  }
})

//@router POST /api/posts
//@desc return new post
//@access Public
router.post('/', async (req, res) => {
  const { name, prompt, image } = req.body
  try {
    await prisma.post.create({
      data: {
        name,
        prompt,
        image: Buffer.from(image, 'base64')
      }
    })
    return res.status(201).json({ success: true })
  } catch (error) {
    return res.status(404).json({ err: error })
  }
})

export default router