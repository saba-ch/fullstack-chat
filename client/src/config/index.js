let config = {}
switch (process.env.REACT_APP_STAGE) {
  case 'production':
    config = {
      APIURL: 'https://facebook-comments-backend-dot-facebook-comments-299117.ew.r.appspot.com',
      WSURL: 'wss://facebook-comments-backend-dot-facebook-comments-299117.ew.r.appspot.com',
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

