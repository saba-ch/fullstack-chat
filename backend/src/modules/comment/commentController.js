import commentService from './commentService'

const getCommentsBySection = async (req, res) => {
  try {
    const { sectionId } = req

    const comments = await commentService.getCommentsBySection(sectionId)

    if (!comments) return res.status(404).send({ message: 'Section Not found' })

    res.status(200).send(comments)
  } catch (error) {
    res.status(500).send({ message: 'something went wrong' })
  }
}

export default {
  getCommentsBySection,
}
