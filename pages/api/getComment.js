import dbConnect from '../../lib/dbConnect'
import Comment from '../../models/commentModel'

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(200).json({
      message: 'Wrong Request',
      error: true,
    })
  }

  res.status(200).json({ message: 'Your Comments is here' })
}

export default handler
