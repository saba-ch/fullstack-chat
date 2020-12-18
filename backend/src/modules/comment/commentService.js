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
  const section = commentModel.find({ sectionId }).sort({ sendTime: -1 })
  await section.save()
  return section
}

export default {
  getCommentsBySection,
  createComment
}
