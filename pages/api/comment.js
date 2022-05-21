import dbConnect from '../../lib/dbConnect'
import Comment from '../../models/commentModel'

async function handler(req, res) {
  await dbConnect()

  if (req.method === 'GET') {
    const comments = await Comment.find({ path: req.headers.slug })

    res
      .status(200)
      .json({ message: 'Your Comments is here', comments: comments })
  }

  if (req.method === 'POST') {
    const commentsNumber = await Comment.count({
      userName: req.body.userName,
      path: req.body.path,
    })

    if (commentsNumber === 3) {
      return res.status(200).json({
        message: "You Can't Have More Than Three Comments",
        error: true,
      })
    }

    await Comment.create(req.body)

    res.status(200).json({ message: 'Comment Was Saved To The DataBase' })
  }

  if (req.method === 'DELETE') {
    await Comment.findByIdAndDelete(req.headers.id)

    res.status(200).json({ message: 'Comment Has Been Deleted' })
  }
}

export default handler
