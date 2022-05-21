import dbConnect from '../../lib/dbConnect'
import Comment from '../../models/commentModel'

async function handler(req, res) {
  await dbConnect()

  if (req.method !== 'DELETE') {
    return res.status(200).json({
      message: 'Wrong Request',
      error: true,
    })
  }

  await Comment.findByIdAndDelete(req.headers.id)

  res.status(200).json({ message: 'Comment Has Been Deleted' })
}

export default handler
