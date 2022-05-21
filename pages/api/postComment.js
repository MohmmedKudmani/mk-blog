import dbConnect from '../../lib/dbConnect'
import Comment from '../../models/commentModel'

async function handler(req, res) {
  await dbConnect()

  if (req.method !== 'POST') {
    return res.status(200).json({
      message: 'Wrong Request',
      error: true,
    })
  }

  const commentsNumber = await Comment.count({
    userName: req.body.userName,
    path: req.body.path,
  })

  if (commentsNumber === 3) {
    return res.status(200).json({
      message: "You can't have more than three comments",
      error: true,
    })
  }

  await Comment.create(req.body)

  res.status(200).json({ message: 'Comment Was Saved To The DataBase' })
}

export default handler
