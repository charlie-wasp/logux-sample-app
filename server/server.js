const Server = require('logux-server').Server

console.log('fire')

const app = new Server(
  Server.loadOptions(process, {
    subprotocol: '1.0.0',
    supports: '1.x',
    root: __dirname
  })
)

app.auth((userId, token) => {
  if (userId == 140) {
    return true
  }
})

app.type('ADD_STUFF', {
  access (action, meta, creator) {
    return true
  },
  process (action) {
    return {}
  }
})

app.listen()
