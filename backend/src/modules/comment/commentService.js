import commentModel from './commentModel'

const createComment = async ({
  sender,
  message,
  sectionId
}) => {
  const comment = new commentModel({
    sender,
    message,
    sectionId
  })
  await comment.save()
  return comment
}

const getCommentsBySection = async ({ sectionId }) => {
  const comments = await commentModel.find({ sectionId }).sort({ sendTime: -1 })
  return comments
}

export default {
  getCommentsBySection,
  createComment
}
