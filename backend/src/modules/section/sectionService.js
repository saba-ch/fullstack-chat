import jwtService from '../../services/jwtService'

import sectionModel from './sectionModel'

const joinSection = async (sectionId, password) => {
  const section = await sectionModel.findOne({ _id: sectionId, password })

  const token = jwtService.sign({ id: section.id })

  delete section.password

  return {
    token,
    ...section.toJSON()
  }
}

const createSection = async ({ name, password }) => {
  const section = new sectionModel({
    name,
    password
  })
  await section.save()

  delete section.password

  const token = jwtService.sign({ id: section.id })

  return {
    token,
    ...section.toJSON()
  }
}

export default {
  joinSection,
  createSection
}
