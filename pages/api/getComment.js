import dbConnect from '../../lib/dbConnect'
import Comment from '../../models/commentModel'

async function handler(req, res) {
  await dbConnect()

  if (req.method !== 'GET') {
    return res.status(200).json({
      message: 'Wrong Request',
      error: true,
    })
  }

  const comments = await Comment.find({ path: req.headers.slug })

  res.status(200).json({ message: 'Your Comments is here', comments: comments })
}

export default handler
