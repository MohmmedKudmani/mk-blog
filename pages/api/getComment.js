import dbConnect from '../../lib/dbConnect'
import Comment from '../../models/commentModel'
import { connection } from 'mongoose'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  if (method !== 'GET') {
    return res.status(200).json({
      message: 'Wrong Request',
      error: true,
    })
  }

  const comments = await Comment.find()

  res.status(200).json({ message: 'Your Comments is here', comments: comments })
}
