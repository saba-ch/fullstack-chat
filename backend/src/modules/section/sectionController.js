import sectionService from './sectionService'

const joinSection = async (req, res) => {
  try {
    const { params, body } = req

    const section = await sectionService.joinSection(params.sectionId, body.password)

    if (!section) return res.status(404).send({ message: 'Section Not found' })

    res.status(200).send(section)
  } catch (error) {
    res.status(500).send({ message: 'something went wrong' })
  }
}
const createSection = async (req, res) => {
  try {
    const { body } = req

    const section = await sectionService.createSection({
      name: body.name,
      password: body.password,
    })

    res.status(201).send(section)
  } catch (error) {
    res.status(500).send({ message: 'something went wrong' })
  }
}

export default {
  joinSection,
  createSection
}
