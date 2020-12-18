import Api from './api'

const api = new Api('comment')

const getComments = () => api.get('/')

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getComments,
}
