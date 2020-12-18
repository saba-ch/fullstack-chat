import axios from 'axios'
import { storageService } from 'services'

import config from '../config'

class Api {
  instance

  constructor(module) {
    this.instance = axios.create({
      baseURL: `${config.APIURL}/${module}`
    })

    this.instance.interceptors.request.use((config) => {
      const token = storageService.getJwtToken()
      
      if(token) config.headers.authorization = token
      
      return config
    })
  }

  post = (...args) => {
    return this.instance.post(...args)
  }
  get = (...args) => {
    return this.instance.get(...args)
  }
  put = (...args) => {
    return this.instance.put(...args)
  }
  delete = (...args) => {
    return this.instance.delete(...args)
  }
}

export default Api
