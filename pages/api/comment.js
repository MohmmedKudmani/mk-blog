import dbConnect from '../../lib/dbConnect'
import Comment from '../../models/commentModel'

async function handler(req, res) {
  await dbConnect()

  if (req.method === 'GET') {
    const comments = await Comment.find({ path: req.headers.slug })
    // , comments: comments

    res.status(200).json({
      message: 'Your Comments is here',
      comments: {
        _id: {
          $oid: '62881d831d53d8bd38655dce',
        },
        comment: 'hello world v2.com',
        userName: 'MohammedKudmani',
        userImage:
          'https://lh3.googleusercontent.com/a-/AOh14Gi-RCr5QK5O-_6usYLg8LJuJhdQcHyxZUTAEg-m=s96-c',
        date: '21/05/2022',
        path: 'test1',
        replayId: false,
        __v: {
          $numberInt: '0',
        },
      },
    })
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
