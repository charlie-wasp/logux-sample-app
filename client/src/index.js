var CrossTabClient = require('logux-client/cross-tab-client')

var user = document.querySelector('meta[name=user]')
var token = document.querySelector('meta[name=token]')
var server = document.querySelector('meta[name=server]')

var logux = new CrossTabClient({
  credentials: token.content,
  subprotocol: '1.0.0',
  server: server.content,
  userId: user.content
})

logux.start()

var submit = document.querySelector('#btn')

submit.addEventListener('click', function () {
  console.log("Click")
  logux.log.add({
    type: 'ADD_STUFF',
  }, {
    reasons: ['sync']
  })
}, false);

logux.on('add', function (action, meta) {
  if (action.type === 'ADD_STUFF') {
    stack = document.querySelector('#stack')
    stack.innerHTML += 'stuff'
  }
})
