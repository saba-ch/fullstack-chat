let config = {}

switch (process.env.REACT_APP_STAGE) {
  case 'production':
    config = {
      APIURL: 'https://someurl.ge',
      WSURL: 'wss://someurl.ge',
    }
    break
  default:
    config = {
      APIURL: 'http://localhost:8000',
      WSURL: 'ws://localhost:8000',
    }
    break
}

export default config

