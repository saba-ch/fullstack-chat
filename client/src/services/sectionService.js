import Api from './api'

const api = new Api('section')

const createSection = ({ name, password }) => api.post('/', { name, password })

const joinSection = ({ sectionId, password }) => api.post(`/${sectionId}`, {
  password
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createSection,
  joinSection
}